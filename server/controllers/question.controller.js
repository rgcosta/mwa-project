const Joi = require('joi');
const Question = require('../models/question.model');

const questionSchema = Joi.object({
  title: Joi.string().required(),
  topic: Joi.string().required(),
  author:Joi.string().required(),
  isPublic:Joi.boolean().required(),
  status: Joi.string(),
  answers: Joi.array()
})


module.exports = {
  insert,
  getAll
};

async function insert(question) {
  question.status = 'open';
  question = await Joi.validate(question, questionSchema, { abortEarly: false });
  return await new Question(question).save();
}

async function getAll() {
    return await Question.find({});
}
