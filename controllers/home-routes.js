const router = require('express').Router();
const { Course, Review, User, Favorite, Played } = require('../models');
const reqAuth = require('../utils/auth');

// get all courses for homepage
// router.get("/", (req, res) => {
//   Course.findAll({
//     attributes: ['id', 'course_name', 'holes', 'par', 'established', 'city', 'state','zipcode']

//   })
//     .then((dbCourseData) => {
//       const courses = dbCourseData.map(course => course.get({ plain: true }));

//       res.render('homepage', {
//         courses,
//         loggedIn: req.session.loggedIn
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// get a single course for new-review page
router.get('/course/:id', (req, res) => {
  Course.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'course_name',
      'holes',
      'par',
      'established',
      'city',
      'state',
      'zipcode'
    ],
    include: [
      {
        model: Review,
        attributes: ['id', 'review_title', 'review_content', 'rating'],
        include: {
          model: User,
          attributes: ['username']
        }
      }
    ]
  })
  .then(dbCourseData => {
    if(!dbCourseData) {
      res.status(404).json({ message: 'No course found with this id' });
      return;
    }

    const course = dbCourseData.get({ plain: true });

    res.render('new-review', {
      course,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


// get all user reviews
// router.get('/', reqAuth, (req, res) => {
//   Review.findAll({
//       attributes: [
//           'id',
//           'review_content',
//           'review_title',
//           'rating',
//           'created_at'
//       ],
//       include: [
//           {
//               model: Course,
//               attributes: ['id', 'course_name', 'city', 'state']
//           },
//           {
//               model: User,
//               attributes: ['id', 'username']
//           }
//       ]
//   })
//   .then(dbReviewData => {
//       const reviews = dbReviewData.map(review => review.get({ plain: true }));
//       console.log(reviews);
//       res.render('homepage', {
//           reviews,
//           loggedIn: req.session.loggedIn
//       });
//   })
//   .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//   });
// });


// login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// signup page
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
})



// get all user reviews
router.get('/', reqAuth, (req, res) => {
  const homeObject = {}
  Review.findAll({
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
      homeObject.reviews = dbReviewData.map(review => review.get({ plain: true }));
      console.log(homeObject.reviews);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  })
  // Course.findAll({
  //       attributes: ['id', 'course_name', 'holes', 'par', 'established', 'city', 'state', 'zipcode']
  //     })
  Played.findAll({
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
          homeObject.played = dbPlayedData.map(played => played.get({ plain: true }));
          //creates a list of all data in homeObject
          homeObject.fullList = homeObject.played.concat(homeObject.reviews)
          //converting date into integers(Date.now())
          //homeObject.ordered = homeObject.fullList.sort(compareNumbers(homeObject.reviews.created_at))
          res.render('homepage', {
            homeObject,
            loggedIn: req.session.loggedIn
          });
        })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});


// get all courses

router.get('/courses', reqAuth, (req, res) => {
    Course.findAll({
        attributes: [
            'id',
            'course_name',
            'holes',
            'par',
            'established',
            'city',
            'state',
            'zipcode'
        ],
        include: [
            {
                model: Review,
                attributes: ['id', 'review_title', 'review_content', 'rating'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username'],
                through: Favorite,
                as: 'favorited_courses'
            }
        ]
    })
    .then(dbCourseData => {
      const courses = dbCourseData.map(course => course.get({ plain: true }));
      console.log(courses);
      res.render('searched-courses', {
          courses,
          loggedIn: req.session.loggedIn
      });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

module.exports = router;





// get all user reviews
// router.get('/', reqAuth, (req, res) => {
//   const homeObject = {}
//   Review.findAll({
//       attributes: [
//           'id',
//           'review_content',
//           'review_title',
//           'rating',
//           'created_at'
//       ],
//       include: [
//           {
//               model: Course,
//               attributes: ['id', 'course_name', 'city', 'state']
//           },
//           {
//               model: User,
//               attributes: ['id', 'username']
//           }
//       ]
//   })
//   .then(dbReviewData => {
//       homeObject.reviews = dbReviewData.map(review => review.get({ plain: true }));
//       console.log(homeObject.reviews);
//   })
//   .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//   })
//   Course.findAll({
//         attributes: ['id', 'course_name', 'holes', 'par', 'established', 'city', 'state', 'zipcode']
//       })
//   .then((dbCourseData) => {
//           homeObject.courses = dbCourseData.map(course => course.get({ plain: true }));
    
//           res.render('homepage', {
//             homeObject,
//             loggedIn: req.session.loggedIn
//           });
//         })
//   .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//   });
// });