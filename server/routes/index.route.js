const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
const questionRoutes = require('./question.route');
const topicRoutes = require('./topic.route');
const profileRoutes = require('./profile.route');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/questions', questionRoutes);
router.use('/topics', topicRoutes);
router.use('/profiles', profileRoutes);
module.exports = router;
