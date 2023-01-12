const mongoose = require("mongoose");

const memeSchema = new mongoose.Schema({
        content: {
            type: String,
        },
        Image: {
            type: String,
        },
    },
    { timestamps: true }
);

const Meme = mongoose.model("Meme", memeSchema)

module.exports = Meme