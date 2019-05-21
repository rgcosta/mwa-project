const Joi = require('joi');
const Notification = require('../models/notification.model');
const request = require('request');
const subCtrl = require('./subscription.controller');

const noticeSchema = Joi.object({
  title: Joi.string().required(),
  click_action: Joi.string().required(),
  body: Joi.string().required()
});

const headers = {
  'Authorization': 'key=AAAAZqOF4sc:APA91bEdb0WljrdgjdcHYTnu5pjDpx9oD9KcJNOMkFIrf0uh1lXNhd8-Wmh5wYfQhUHXrHAmvCJTXcL_9CZl4v7Tppg2nYz_snA-At-K-fyRrK-Y6AgGfRksQ5uWuHgxKqFQt_4PHBej',
  'Content-Type':     'application/json'
};

const options = {
  url: 'https://fcm.googleapis.com/fcm/send',
  method: 'POST',
  headers: headers,
  json: {
    "notification": {
      "title": "Title",
      "body": "body",
      "click_action" : "http://localhost:4040/",
      "icon": "http://localhost:4040/logo.png"
    },
    "to" : "receiverToken"
  }
};


module.exports = {
  insert,
  getLastNotices,
  push

};
async function insert(notice, user) {
  notice = await Joi.validate(notice, noticeSchema, { abortEarly: false });
  notice.email = user.email;
  return await new Notification(notice).save();
}
async function getLastNotices(user) {
  return await Notification.find({email: user.email});
}
async function push(notice,user) {
  let subs = await subCtrl.findAll(user);

  console.log(subs);
  let body;

  for(let sub of subs){
    options.json.notification.title = notice.title;
    options.json.notification.body = notice.body;
    options.json.notification.click_action = notice.click_action;
    options.json.to= sub.token;
    body = await request(options);
  }

  insert(notice,user).then((data)=>console.log(data));
  return subs;
}
