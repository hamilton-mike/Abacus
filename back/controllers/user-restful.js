require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/UserSchema');
const obj = [];

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/first', async (req, res) => {
    try {
        const user = obj[obj.length - 1]
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });

        if (await bcrypt.compare(req.body.password, user.password)) {
            res.status(200).json(user);
        }

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

        if (users.length > 1) {
            users.map(async user => await User.findByIdAndRemove(user._id))
        } else {
            obj.push(create)
            res.status(200).json(create);
        }

    } catch (error) {
        res.status(400).json({ error: error.message })
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
        const destroyUser = await User.findByIdAndRemove(req.params.id);
        res.status(200).json(destroyUser);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = router;
