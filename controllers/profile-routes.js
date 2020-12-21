const router = require('express').Router();
const { User, Course, Favorite, Review } = require('../models');
const reqAuth = require('../utils/auth');

// get user data
router.get('/', (req, res) => {
    console.log("------------", req.session.userId)
    User.findOne({
        where: {
            id: req.session.userId
        },
        attributes: [
            'id',
            'username',
            'firstname',
            'lastname'
        ]
    })
        .then(dbUserData => {
            // console.log("///////", dbUserData.dataValues)
            const { dataValues } = dbUserData
            res.render('profile', {
                dataValues
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get all user reviews
router.get('/', reqAuth, (req, res) => {
    Review.findAll({
        where: {
            user_id: req.session.userId
        },
        attributes: [
            'id',
            'review_content',
            'review_title',
            'rating',
            'created_at'
        ],
        include: [
            {
                model: Course,
                attributes: ['id', 'course_name', 'city', 'state']
            },
            {
                model: User,
                attributes: ['id', 'username']
            }
        ]
    })
        .then(dbReviewData => {
            const reviews = dbReviewData.map(review => review.get({ plain: true }));

            res.render('profile', {
                reviews,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// // get all user favorited courses
router.get('/favorited', reqAuth, (req, res) => {
    Favorite.findAll({
        where: {
            user_id: req.session.userId
        },
        attributes: [
            'id'
        ],
        include: [
            {
                model: Course,
                attributes: ['id', 'course_name', 'holes', 'par', 'established', 'city', 'state', 'zipcode']
            }
        ]
    })
        .then(dbReviewData => {
            const favorites = dbReviewData.map(favorite => favorite.get({ plain: true }));

            res.render('profile-favorited', {
                favorites,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;