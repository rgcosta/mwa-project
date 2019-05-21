const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const noticeCtrl = require('../controllers/notification.controller');

const router = express.Router();
module.exports = router;

router.use(passport.authenticate('jwt', { session: false }))

router.route('/')
    .post(asyncHandler(push))
    .get(asyncHandler(getLastNotices));

async function push(req, res) {
  let notice = await noticeCtrl.push(req.body,req.body.email);
  res.json(notice);
}
async function getLastNotices(req, res) {
  let notices = await noticeCtrl.getLastNotices(req.user);
  res.json(notices);
}
