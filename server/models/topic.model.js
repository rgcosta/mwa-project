const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Topic', TopicSchema);
