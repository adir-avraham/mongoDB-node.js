const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    },
    joinedDate: {
        type: Date,
        default: Date.now
    }
})



module.exports = mongoose.model('Users', UserSchema);