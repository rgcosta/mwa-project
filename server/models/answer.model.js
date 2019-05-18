const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    username: String,
    picture: String,
    body: String,
    upvote: Number,
    downvote: Number,
    isPublic: Boolean,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Answer', AnswerSchema);
