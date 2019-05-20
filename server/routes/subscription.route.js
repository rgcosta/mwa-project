const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const subCtrl = require('../controllers/subscription.controller');

const router = express.Router();
module.exports = router;

router.use(passport.authenticate('jwt', { session: false }))

router.route('/')
    .post(asyncHandler(insert))
    .delete(asyncHandler(remove));

async function insert(req, res) {
  let sub = await subCtrl.insert(req.body,req.user);
  res.json(sub);
}
async function remove(req, res) {
  let sub = await subCtrl.remove(req.params.token);
  res.json(sub);
}
