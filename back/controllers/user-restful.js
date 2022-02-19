const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/UserSchema');

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.post('/signup', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        const users = await User.find();
        const duplicates = users.filter(obj => obj.username === newUser.username);
        const hash = await bcrypt.hash(newUser.password, 10);
        newUser.password = hash;
        (duplicates.length > 1) ? res.redirect('https://abacus-ga.netlify.app/') : res.status(200).json(newUser);
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
        const destroyUser = await User.findByIdAndRemove(req.params.id)
        res.status(200).json(destroyUser);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = router;
