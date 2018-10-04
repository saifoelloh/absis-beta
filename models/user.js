const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    host: String,
    port: String,
    token: String
}, {
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema);
