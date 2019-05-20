const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const questionCtrl = require('../controllers/question.controller');

const router = express.Router();
module.exports = router;

router.use(passport.authenticate('jwt', { session: false }))

router.route('/')
    .post(asyncHandler(insert))
    .get(asyncHandler(getAll));


router.route('/:id')
    .get(asyncHandler(getById));
router.route('/:id/answers')
    .post(asyncHandler(addAnswer));
router.route('/:id/answers/:answerId/upvote')
    .post(asyncHandler(upvoteAnswer));
router.route('/:id/answers/:answerId/downvote')
    .post(asyncHandler(downvoteAnswer));



async function insert(req, res) {
  // let user = req.user;
  // req.body.author = user.email;
  let question = await questionCtrl.insert(req.body, req.user);
  res.json(question);
}

async function getAll(req, res) {
  const questions = await questionCtrl.getAll();
  res.status(200).json(questions);
}

async function getById(req, res) {
  const question = await questionCtrl.getById(req.params.id);
  res.status(200).json(question);
}

async function addAnswer(req,res) {
  const question = await questionCtrl.addAnswer(req.params.id,req.body);
  res.status(200).json(question);
}

async function upvoteAnswer(req,res) {
  const question = await questionCtrl.upvoteAnswer(req.params.id,req.params.answerId);
  res.status(200).json(question);
}

async function downvoteAnswer(req,res) {
  const question = await questionCtrl.downvoteAnswer(req.params.id,req.params.answerId);
  res.status(200).json(question);
}
