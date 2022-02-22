const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const User = require('../models/UserSchema');


router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username, password: req.body.password });
        console.log(user, 'success');
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.post('/signup', async (req, res) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 10);
        const user = { username: req.body.username, password: hash };
        const create = await User.create(user);

        const users = await User.find({ username: create.username });
        const duplicates = users.filter(obj => obj.username === create.username);
        // const token = await JWT.sign({ username }, 'minubg865d4s3w5xecyrutviybou89', { expiresIn: 90000 });
        // console.log(createUser, 'jwt', token);
        if (duplicates.length > 1) {
            users.map(async user => {
                if (user.username === create.username) {
                    await User.findByIdAndRemove(user._id);
                }
            })
        } else {
            res.setHeader('Content-Type', 'text/html')
            return res.sendStatus(200).json(user);
        }
    } catch (error) {
        res.sendStatus(400).json({ error: error.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const editUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(editUser);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const destroyUser = await User.findByIdAndRemove(req.params.id)
        res.status(200).json(destroyUser);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = router;
