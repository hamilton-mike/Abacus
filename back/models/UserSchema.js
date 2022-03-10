const mongoose = require('mongoose');
const str = { type: String };
const num = { type: Number };

const userSchema = mongoose.Schema({
    id: str,
    name: str,
    username: { type: String, required: true, index: { unique: true } },
    password: str,
    income: num,
    debt: num,
    age: num,
    action: { type: mongoose.Types.ObjectId, ref: 'Action' }
})

module.exports = mongoose.model('User', userSchema);
