const mongoose = require('mongoose');
const str = { type: String };
const num = { type: Number };

const userSchema = mongoose.Schema({
    name: { type: String, require: true },
    username: str,
    password: str,
    income: num,
    debt: num,
    age: num
})

module.exports = mongoose.model('User', userSchema);
