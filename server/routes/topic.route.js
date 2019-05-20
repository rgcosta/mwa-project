const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const topicCtrl = require('../controllers/topic.controller');

const router = express.Router();
module.exports = router;

router.use(passport.authenticate('jwt', { session: false }))

router.route('/')
    .post(asyncHandler(insert));

router.route('/:name')
    .get(asyncHandler(getAllQuestions));

async function insert(req, res) {

}

async function getAllQuestions(req, res) {
    const questions = await topicCtrl.getAllQuestions(req.params.name);
    res.status(200).json(questions);
}
