const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const userCtrl = require('../controllers/user.controller');

let Question = require('../models/question.model');

const router = express.Router();
module.exports = router;

router.use(passport.authenticate('jwt', { session: false }))

router.route('/')
  .post(asyncHandler(insert));

// router.post('/questionTest', function (req, res) {
//   let question = req.body;
//   new Question(question).save(function (err, doc) {
//     console.log("Question saved!");
//     console.dir(doc);
//     res.status(200).json(doc);
//   });
// });


async function insert(req, res) {
  let user = await userCtrl.insert(req.body);
  res.json(user);
}
