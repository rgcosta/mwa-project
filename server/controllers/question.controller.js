const Joi = require('joi');
const Question = require('../models/question.model');

const questionSchema = Joi.object({
  title: Joi.string().required(),
  topic: Joi.string().required(),
  author:Joi.string().required(),
  isPublic:Joi.boolean().required()
})


module.exports = {
  insert
}

async function insert(question) {
  question = await Joi.validate(question, questionSchema, { abortEarly: false });
  return await new Question(question).save();
}
