const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const topicCtrl = require('../controllers/topic.controller');

const router = express.Router();
module.exports = router;

router.use(passport.authenticate('jwt', { session: false }))

router.route('/')
    .get(asyncHandler(getAll))
    .post(asyncHandler(insert));

router.route('/:name')
    .delete(asyncHandler(deleteTopic))
    .get(asyncHandler(getAllQuestions));

async function insert(req, res) {
    const topic = await topicCtrl.insert(req.body);
    res.status(200).json(topic);
}

async function getAll(req, res) {
    const topics = await topicCtrl.getAll();
    res.status(200).json(topics);
}

async function getAllQuestions(req, res) {
    const questions = await topicCtrl.getAllQuestions(req.params.name);
    res.status(200).json(questions);
}

async function deleteTopic(req, res) {
    //It does not check if there is questions under this topic
    await topicCtrl.deleteTopic(req.params.name);
    res.status(200).json({success: "Topic was deleted successfully"});
}
