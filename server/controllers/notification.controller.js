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
 // todo add
  return;
}
async function getLastNotices(user) {
  // todo add
  return;
}
