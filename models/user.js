const mongoose = require('mongoose');

//create user schema

const userSchema = new mongoose.Schema({
    firstName : String,
    lastName: String,
    emailId: String,
    password: String,
    age: Number,
    gender: String
})

//create user model from schema

const User = mongoose.model("User",userSchema);

module.exports = User;