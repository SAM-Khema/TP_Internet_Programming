var mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    
    password: {
        type: String,
        unique: true,
        required: true
    },
    firstname: {
        type: String,
        // unique: true,
        required: true
    },
    lastname: {
        type: String,
        // unique: true,
        required: true
    },
   username: {
        type: String,
        unique: true,
        required: true
    },
});

const users = mongoose.model('users', userSchema);

module.exports = users;