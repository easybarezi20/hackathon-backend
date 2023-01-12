const mongoose = require("mongoose");

const memeSchema = new mongoose.Schema({
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
        content: {
            type: String,
            required: [true, "message is required"],
        },
        Image: {
            type: String,
        },
    },
    { timestamps: true }
);

const Meme = mongoose.model("Meme", memeSchema)

module.exports = Meme