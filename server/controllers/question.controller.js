const Joi = require('joi');
const Question = require('../models/question.model');
const Profile = require('../models/profile.model');

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

async function insert(question, user) {
  question.status = 'open';
  question = await Joi.validate(question, questionSchema, { abortEarly: false });
  question = await new Question(question).save();

  //Push a ref into the user profile
  let profile = await Profile.findOneAndUpdate({'user._id': user._id}, {$push: {questions: question._id}});
  if (!profile) {
    profile = {user: user, questions: [question._id]};
    await new Profile(profile).save();
  }
  return question;
}

async function getAll() {
  const project = {_id: 1, title: 1, topic: 1, createdAt:1, answers:1};
  return await Question.find({}, project);
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
