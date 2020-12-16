const router = require('express').Router();
const { Review, User, Course } = require('../../models');

router.post('/', (req, res) => {
    Review.create({ 
        course_id: req.body.course_id,
        user_id: req.body.user_id,
        review_content: req.body.review_content
     })
     .then(dbReview => res.json(dbReview))
     .catch(err => {
         res.status(500).json(err);
     });
});





module.exports = router;