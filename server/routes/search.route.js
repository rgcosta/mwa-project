const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const questionCtrl = require('../controllers/question.controller');
const router = express.Router();
module.exports = router;

// router.use(passport.authenticate('jwt', { session: false }))

router.route('/').get(asyncHandler(search));

async function search(req, res) {
  const questions = await questionCtrl.search(req.query.q);
  res.status(200).json(questions);
}


