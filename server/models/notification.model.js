const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    email: String,
    title: String,
    body:String,
    noticeLink:String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Notification', TopicSchema);
