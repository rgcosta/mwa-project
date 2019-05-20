const Joi = require('joi');
const Question = require('../models/question.model');


// const questionSchema = Joi.object({
//     title: Joi.string().required(),
//     topic: Joi.string().required(),
//     author:Joi.string().required(),
//     isPublic:Joi.boolean().required(),
//     status: Joi.string(),
//     answers: Joi.array()
// })


module.exports = {
    getAllQuestions
};

async function getAllQuestions(topicName) {
    return await Question.find({topic: topicName});
}
