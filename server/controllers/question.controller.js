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
  getAll,
  getById,
  addAnswer,
  upvoteAnswer,
  downvoteAnswer
};

async function insert(question) {
  question.status = 'open';
  question = await Joi.validate(question, questionSchema, { abortEarly: false });
  return await new Question(question).save();
}

async function getAll() {
    return await Question.find({});
}

async function getById(id) {
  return await Question.findById(id);
}



//--------------- query answers


async function addAnswer(id,answer){
  answer.downvote = 0;
  answer.upvote = 0;
  return await Question.update({_id:id}, {$push:{ answers: answer }});
}


async function upvoteAnswer(id,answerId){
  return await Question.update({_id:id,'answers._id':answerId}, {$inc:{ "answers.$.upvote": 1 }});
}



async function downvoteAnswer(id,answerId){
  return await Question.update({_id:id,'answers._id':answerId}, {$inc:{ "answers.$.downvote": 1 }});
}
