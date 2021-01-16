const router = require('express').Router();
const { Review, User, Course } = require('../../models');
const reqAuth = require('../../utils/auth');

router.post('/', reqAuth, (req, res) => {
    if (req.session) {
        Review.create({
            course_id: req.body.course_id,
            review_content: req.body.review_content,
            rating: req.body.rating,
            user_id: req.session.userId,
            review_title: req.body.review_title
        })
            .then(dbReview => res.json(dbReview))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    }
});

router.get('/', (req, res) => {
    Review.findAll({
        attributes: [
            'id',
            'review_title',
            'review_content',
            'rating',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Course,
                attributes: ['course_name', 'city', 'state']
            }
        ]
    })
        .then(dbReview => res.json(dbReview))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Review.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'review_title',
            'review_content',
            'rating',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Course,
                attributes: ['course_name', 'city', 'state']
            }
        ]
    })
        .then(dbReviewData => {
            if (!dbReviewData) {
                res.status(404).json({ message: 'No review found with this id' });
                return;
            }
            res.json(dbReviewData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Review.update(
        {
            review_title: req.body.review_title,
            review_content: req.body.review_content,
            rating: req.body.rating
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbReviewData => {
            if (!dbReviewData) {
                res.status(404).json({ message: 'No review found with this id' });
                return;
            }
            res.json(dbReviewData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Review.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbReviewData => {
            if (!dbReviewData) {
                res.status(404).json({ message: 'No review found with this id' });
                return;
            }
            res.json(dbReviewData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;