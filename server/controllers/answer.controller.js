const Joi = require('joi');
const Answer = require('../models/answer.model');

const answerSchema = Joi.object({
  body: Joi.string().required(),
  username: Joi.string().required(),
  isPublic:Joi.boolean().required()
})


module.exports = {
  insert
}

async function insert(answer) {
  answer = await Joi.validate(answer, answerSchema, { abortEarly: false });
  return await new Answer(question).save();
}
