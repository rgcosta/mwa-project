const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const profileCtrl = require('../controllers/profile.controller');

const router = express.Router();
module.exports = router;

router.use(passport.authenticate('jwt', { session: false }))

router.route('/:userId/questions')
    .get(asyncHandler(getAllQuestions));

async function getAllQuestions(req, res) {
    const questions = await profileCtrl.getAllQuestions(req.params.userId);
    res.status(200).json(questions);
}
