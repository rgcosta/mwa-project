const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const profileCtrl = require('../controllers/profile.controller');

const router = express.Router();
module.exports = router;

router.use(passport.authenticate('jwt', { session: false }))

router.route('/:userId/questions')
    .get(asyncHandler(getAllQuestions));
router.route('/:userId/answers')
    .get(asyncHandler(getAllAnswers));
router.route('/:userId/following')
    .get(asyncHandler(getQuestionsFollowed));
router.route('/:userId/questions/:questionId')
    .delete(asyncHandler(deleteQuestion));
router.route('/:userId/answers/:answerId')
    .delete(asyncHandler(deleteAnswer));
async function getAllQuestions(req, res) {

    const questions = await profileCtrl.getAllQuestions(req.params.userId);
    res.status(200).json(questions);
}
async function getAllAnswers(req,res) {
    const answers = await profileCtrl.getAllAnswers(req.params.userId);
    res.status(200).json(answers);
}
async function deleteQuestion(req,res) {
    console.log(req.params.userId);
    const deleted = await profileCtrl.deleteQuestion(req.params.userId ,req.params.questionId);
    res.status(200).json({success:1});

}
async function deleteAnswer(req,res) {
    await profileCtrl.deleteAnswer(req.params.answerId);
    res.status(200).json({success:1});

}

async function getQuestionsFollowed(req, res) {
    const questions = await profileCtrl.getQuestionsFollowed(req.params.userId);
    res.status(200).json(questions);
}

