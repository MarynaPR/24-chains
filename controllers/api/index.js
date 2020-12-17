const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const courseRoutes = require('./course-routes');
const playedRoutes = require('./played-routes');

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/course', courseRoutes);
router.use('/played', playedRoutes);


module.exports = router;