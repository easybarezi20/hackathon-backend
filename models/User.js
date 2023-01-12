const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username cannot be empty!"], 
    },
    password: {
        type: String, 
        required:[true, "Password is Required!"],
    },
    meme: {
        type: mongoose.Types.ObjectId,
        ref: "Meme",
    },
});

const User = mongoose.model("User", userSchema)

module.exports = User;