const mongoose = require('mongoose')

// schema 
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    DOB: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female']
    }
})

// model
const userModel = new mongoose.model('usersmodel', userSchema)


module.exports = userModel