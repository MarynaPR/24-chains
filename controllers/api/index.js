const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const reviewRoutes = require('./review-routes.js');
const courseRoutes = require('./course-routes');
const playedRoutes = require('./played-routes');

router.use('/user', userRoutes);
router.use('/review', reviewRoutes);
router.use('/course', courseRoutes);
router.use('/played', playedRoutes);


module.exports = router;