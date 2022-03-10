const mongoose = require('mongoose');
const str = { type: String };

const actionSchema = mongoose.Schema({
    name: str,
    date: str,
    amount: str,
    user: { type: mongoose.Types.ObjectId, ref: "User" }
})

module.exports = mongoose.model('Action', actionSchema);
