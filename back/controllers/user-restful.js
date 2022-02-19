const express = require('express');
const router = express.Router();
const User = require('../models/UserSchema');

router.get('/', (req, res) => {
    res.send('hello')
})

module.exports = router;
