const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const questionCtrl = require('../controllers/question.controller');

const router = express.Router();
module.exports = router;

router.use(passport.authenticate('jwt', { session: false }))

router.route('/')
  .post(asyncHandler(insert));

async function insert(req, res) {
  let user = req.user;
  req.body.author = user.email;
  let question = await questionCtrl.insert(req.body);
  res.json(question);
}
