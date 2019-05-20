const Joi = require('joi');
const Question = require('../models/question.model');
const Topic = require('../models/topic.model');


const topicSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string()
});


module.exports = {
    getAllQuestions,
    insert,
    getAll,
    deleteTopic
};

async function insert(topic) {
    topic = await Joi.validate(topic, topicSchema, { abortEarly: false });
    return await new Topic(topic).save();
}

async function getAll(topic) {
    return await Topic.find({});
}


async function getAllQuestions(topicName) {
    const project = {_id: 1, title: 1, topic: 1, createdAt:1, answers:1};
    return await Question.find({topic: topicName}, project);
}

async function deleteTopic(topicName) {
    const topDel = Topic.find({title: topicName});
    topDel.remove();
}
