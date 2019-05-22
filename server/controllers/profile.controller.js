const Joi = require('joi');
const Question = require('../models/question.model');
const Profile = require('../models/profile.model');
const ObjectId = require('mongodb').ObjectId;


module.exports = {
    getAllQuestions
};

async function getAllQuestions(userId) {
    const project = {_id: 1, title: 1, topic: 1, createdAt:1, answers:1, status:1};

    let questionIds = await Profile.findOne({'user._id': new ObjectId(userId)}, {questions:1});

    if (!questionIds) {
        return JSON.parse('[]');
    }

    let questions = [];
    let id = '';
    let question = null;
    for (let i = 0; i < questionIds.questions.length; i++) {
        id = questionIds.questions[i];
        question = await Question.findById(id, project);
        questions.push(question);
    }

    console.log(question);
    return questions;
}
