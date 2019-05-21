const Joi = require('joi');
const Subscription = require('../models/subscription.model');

const subscriptionSchema = Joi.object({
  token: Joi.string().required(),
})


module.exports = {
  insert,
  remove,
  findAll
}

async function insert(sub,user) {
  subsc = await Joi.validate(sub, subscriptionSchema, { abortEarly: false });
  subsc.email = user.email;
  const tokenDel = await Subscription.findOne({token: sub.token});
  if(tokenDel){
    return {};
  }else {
    return await new Subscription(subsc).save();
  }

}
async function remove(token) {
  console.log(token);
  const tokenDel = await Subscription.findOne({token: token});
  return await tokenDel.remove();
}
async function findAll(user) {
  return await Subscription.find({email: user.email});
}
