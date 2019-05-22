const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    title: String,
    author: String,
    email:String,
    answers: [{
        email:String,
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
    }],
    status: String,
    isPublic: Boolean,
    topic: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Question', QuestionSchema);
