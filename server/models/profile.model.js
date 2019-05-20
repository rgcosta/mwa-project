const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {},
    questions: [String],
    answers: [String],
    following: [String],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Profile', ProfileSchema);
