const express = require('express');
const router = express.Router();
const Action = require('../models/ActionSchema');


router.get('/', async (req, res) => {
    try {
        const actions = await Action.find();
        res.status(200).json(actions);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const action = await Action.findById(req.params.id);
        res.status(200).json(action);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const newAction = await Action.create(req.body);
        console.log(newAction, 'hello motto');
        res.status(200).json(newAction);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const editAction = await Action.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(editAction);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const destroyAction = await Action.findByIdAndRemove(req.params.id);
        res.status(200).json(destroyAction);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = router;
