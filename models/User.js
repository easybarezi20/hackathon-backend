const mongoose = require("mongoose");
const Meme = require('./Meme')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username cannot be empty!"], 
    },
    password: {
        type: String, 
        required:[true, "Password is Required!"],
    },
    meme:[Meme.schema]
});

const User = mongoose.model("User", userSchema)

module.exports = User;