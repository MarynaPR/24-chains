const router = require('express').Router();
const { User, Course, Favorite, Review } = require('../models');
const reqAuth = require('../utils/auth');

// get user data
// router.get('/', (req, res) => {
//     User.findAll({
//         where: {
//             id: req.session.userId
//         },
//         attributes: [
//             'id',
//             'username',
//             'firstname',
//             'lastname'
//         ]
//     })
//     .then(dbUserData => {
//         res.render('profile', {
//             dbUserData,
//             //loggedIn: true
//         });
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

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
                attributes: ['id', 'course_name']
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
                attributes: ['id', 'course_name', 'holes', 'par', 'established', 'zipcode']
            }
        ]
    })
    .then(dbReviewData => {
        const favorites = dbReviewData.map(favorite => favorite.get({ plain: true }));
        
        res.render('profile-favorited', {
            favorites,
            //loggedIn: true
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;