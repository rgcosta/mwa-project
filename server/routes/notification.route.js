const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const noticeCtrl = require('../controllers/notification.controller');

const router = express.Router();
module.exports = router;

router.use(passport.authenticate('jwt', { session: false }))

router.route('/')
    .post(asyncHandler(insert))
    .get(asyncHandler(getLastNotices));

async function insert(req, res) {
  let notice = await noticeCtrl.insert(req.body,req.user);
  res.json(notice);
}
async function getLastNotices(req, res) {
  let notices = await noticeCtrl.getLastNotices(req.user);
  res.json(notices);
}
