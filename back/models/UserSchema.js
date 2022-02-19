const mongoose = require('mongoose');
const str = { type: String };
const num = { type: Number }

const userSchema = mongoose.Schema({
    name: str,
    email: str,
    hash: str,
    income: num,
    debt: num,
    age: num
})

module.exports = mongoose.model('User', userSchema);
