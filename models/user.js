const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    school: String,
    address: String,
    admin: String,
    phone: String,
    grade: {
        type: String,
        enum: ['SD', 'SMP', 'SMA', 'SMK']
    },
    subdomain: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema);
