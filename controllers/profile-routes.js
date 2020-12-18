const router = require('express').Router();
const { User, Course, Favorite, Review } = require('../models');

// get user data
// router.get('/', (req, res) => {
//     User.findAll({
//         where: {
//             id: req.session.user_id
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
router.get('/', (req, res) => {
    Review.findAll({
        where: {
            user_id: req.session.userId
        },
        attributes: [
            'id',
            'review_content',
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
            //loggedIn: true
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get all user favorited courses
// router.get('/', (req, res) => {
//     Favorite.findAll({
//         where: {
//             user_id: req.session.user_id
//         },
//         attributes: [
//             'id'
//         ],
//         include: [
//             {
//                 model: Course,
//                 attributes: ['id', 'course_name', 'zipcode']
//             }
//         ]
//     })
//     .then(dbReviewData => {
//         const favorites = dbReviewData.map(favorite => favorite.get({ plain: true }));

//         res.render('profile', {
//             favorites,
//             //loggedIn: true
//         });
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

module.exports = router;