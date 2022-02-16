const express = require('express')
const router = express.Router();
// require('')

router.get('/', async (req, res) => {
    try {
        // const model = await Model.find()
        res.status(200).json(model)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        // const model = await Model.findById()
        res.status(200).json(model)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        // const model = await Model.create()
        res.status(200).json(model)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.put('/', async (req, res) => {
    try {
        // const model = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(model)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.delete('/', async (req, res) => {
    try {
        // const model = await Model.findByIdAndRemove(req.params.id)
        res.status(200).json(model)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})
