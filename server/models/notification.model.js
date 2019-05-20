const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    email: String,
    title: String,
    body:String,
    click_action:String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Notification', NotificationSchema);
