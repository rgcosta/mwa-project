const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const questionCtrl = require('../controllers/question.controller');
const notificationCtrl = require('../controllers/notification.controller');
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
    .put(asyncHandler(upvoteAnswer));
router.route('/:id/answers/:answerId/downvote')
    .put(asyncHandler(downvoteAnswer));
router.route('/:id/answers/:answerId')
    .get(asyncHandler(getAnswer));
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

async function search(req, res) {
  const questions = await questionCtrl.search(req.params.q);
  res.status(200).json(questions);
}

async function getById(req, res) {
  const question = await questionCtrl.getById(req.params.id);
  res.status(200).json(question);
}
async function addAnswer(req,res) {
  const question = await questionCtrl.addAnswer(req.params.id,req.body, req.user);
  await getNotification('add',req,res);
  res.status(200).json(question);

}

async function upvoteAnswer(req,res) {
  const question = await questionCtrl.upvoteAnswer(req.params.id,req.params.answerId);
  await getNotification('up',req,res);
  res.status(200).json(question);
}

async function downvoteAnswer(req,res) {
  const question = await questionCtrl.downvoteAnswer(req.params.id,req.params.answerId);
  await getNotification('down',req,res);
  res.status(200).json(question);

}
async function getAnswer(req,res) {
  const question = await questionCtrl.getAnswer(req.params.id,req.params.answerId);
  res.status(200).json(question);
}
async function getNotification(type,req,res){
  const question = await questionCtrl.getById(req.params.id);
  const answer = await questionCtrl.getAnswer(req.params.id,req.params.answerId);
  const reqBody = {
    "title": "MWA QUORA",
    "body": "someone created notifications",
    "click_action": "http://localhost:4040/home",
    "questionId":req.params.id,
    "email":""
  }
  switch (type) {
    case 'add':
      reqBody.email = question.email ? question.email : question.author;
      reqBody.body = req.user.fullname + " is answered your question";
      break;
    case 'up':
      reqBody.email = answer.answers[0].email;
      reqBody.body = answer.answers[0].username + " is upvoted your answer";
      break;
    case 'down':
      reqBody.email = answer.answers[0].email;
      reqBody.body = answer.answers[0].username + " is downvoted your answer";
      break;
  }

  notificationCtrl.push(reqBody,reqBody.email).then(data=>console.log(data));
}

