const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const courseRoutes = require('./course-routes');
const favoriteRoutes = require('./favorite-routes');

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/course', courseRoutes);
router.use('/favorite', favoriteRoutes);


module.exports = router;