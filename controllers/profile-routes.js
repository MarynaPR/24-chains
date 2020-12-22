const router = require('express').Router();
const { User, Course, Favorite, Review, Played, Saved } = require('../models');
const reqAuth = require('../utils/auth');

// get user data
// router.get('/', (req, res) => {
//     console.log("------------", req.session.userId)
//     User.findOne({
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
//         .then(dbUserData => {
//             // console.log("///////", dbUserData.dataValues)
//             const { dataValues } = dbUserData
//             res.render('profile', {
//                 dataValues,
//                 loggedIn: req.session.loggedIn

//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// get all user reviews
// router.get('/', reqAuth, (req, res) => {
//     Review.findAll({
//         where: {
//             user_id: req.session.userId
//         },
//         attributes: [
//             'id',
//             'review_content',
//             'review_title',
//             'rating',
//             'created_at'
//         ],
//         include: [
//             {
//                 model: Course,
//                 attributes: ['id', 'course_name', 'city', 'state']
//             },
//             {
//                 model: User,
//                 attributes: ['id', 'username']
//             }
//         ]
//     })
//         .then(dbReviewData => {
//             const reviews = dbReviewData.map(review => review.get({ plain: true }));

//             res.render('profile', {
//                 reviews,
//                 loggedIn: req.session.loggedIn
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

//get all the saved courses
router.get('/saved', reqAuth, (req, res) => {
    const profileSavedObject = {};
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
            profileSavedObject.user = dbUserData.get({ plain: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    Saved.findAll({
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
            profileSavedObject.saved = dbReviewData.map(saved => saved.get({ plain: true }));
            res.render('profile-saved', {
                profileSavedObject,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// // get all user favorited courses and user data
router.get('/favorited', reqAuth, (req, res) => {
    const profileFavoriteObject = {};

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
            //const { dataValues } = dbUserData
            profileFavoriteObject.user = dbUserData.get({ plain: true });

        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })

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
            profileFavoriteObject.favorites = dbReviewData.map(favorite => favorite.get({ plain: true }));

            profileFavoriteObject.favorites = profileFavoriteObject.favorites.sort((a, b) => (a.created_at > b.created_at) ? 1 : -1).reverse();

            res.render('profile-favorited', {
                profileFavoriteObject,
                loggedIn: req.session.loggedIn
            });
        });
})
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

// get all user reviewed courses and user data
router.get('/reviewed', reqAuth, (req, res) => {
    const profileReviewObject = {};

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
            //const { dataValues } = dbUserData
            profileReviewObject.user = dbUserData.get({ plain: true });

        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })

    Review.findAll({
        where: {
            user_id: req.session.userId
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
                model: Course,
                attributes: ['id', 'course_name', 'holes', 'par', 'established', 'city', 'state', 'zipcode']
            }
        ]
    })
        .then(dbReviewData => {
            profileReviewObject.reviews = dbReviewData.map(review => review.get({ plain: true }));

            profileReviewObject.reviews = profileReviewObject.reviews.sort((a, b) => (a.created_at > b.created_at) ? 1 : -1).reverse();

            res.render('profile-reviewed', {
                profileReviewObject,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


//loads all profile data on page load (username, reviews, played courses by user)
router.get('/', reqAuth, (req, res) => {
    const profileObject = {}
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
            //const { dataValues } = dbUserData
            profileObject.user = dbUserData.get({ plain: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
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
            profileObject.reviews = dbReviewData.map(review => review.get({ plain: true }));
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    Played.findAll({
        where: {
            user_id: req.session.userId
        },
        attributes: [
            'id',
            'score',
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
        .then((dbPlayedData) => {
            profileObject.played = dbPlayedData.map(played => played.get({ plain: true }));

            //creates a list of all data in homeObject
            profileObject.fullList = profileObject.played.concat(profileObject.reviews)

            profileObject.sorted = profileObject.fullList.sort((a, b) => (a.created_at > b.created_at) ? 1 : -1).reverse();

            res.render('profile', {
                profileObject,
                loggedIn: req.session.loggedIn
            });
        });
})

module.exports = router;