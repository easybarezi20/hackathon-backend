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
},
    {
        timestamps: true
    
    });

const User = mongoose.model("User", userSchema)

module.exports = User;