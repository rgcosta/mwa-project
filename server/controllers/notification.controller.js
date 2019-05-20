const Joi = require('joi');
const Notification = require('../models/notification.model');

const noticeSchema = Joi.object({
  title: Joi.string().required(),
  link: Joi.string().required(),
  body: Joi.string().required()
})


module.exports = {
  insert,
  getLastNotices,

}

async function insert(notice, user) {
  notice = await Joi.validate(notice, noticeSchema, { abortEarly: false });
  notice.email = user.email;
  return await new Notification(notice).save();
}
async function getLastNotices(user) {
  // todo add
  return;
}
