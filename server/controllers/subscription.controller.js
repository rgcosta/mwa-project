const Joi = require('joi');
const Subscription = require('../models/subscription.model');

const subscriptionSchema = Joi.object({
  token: Joi.string().required(),
})


module.exports = {
  insert,
  remove
}

async function insert(sub,user) {
  subsc = await Joi.validate(sub, subscriptionSchema, { abortEarly: false });
  subsc.email = user.email;
  return await new Subscription(subsc).save();
}
async function remove(token) {
  const tokenDel = await Subscription.findOne({token: token});
  return await topDel.remove();
}
