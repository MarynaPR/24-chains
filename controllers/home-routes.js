const router = require('express').Router();
const { Course, Review, User, Favorite, Played, Saved } = require('../models');
const reqAuth = require('../utils/auth');


// get a single course for new-review page
router.get('/course/:id', (req, res) => {
  const reviewObject = {};

  Review.findAll({
    where: {
      course_id: req.params.id
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
      reviewObject.reviews = dbReviewData.map(review => review.get({ plain: true }));
      reviewObject.reviews = reviewObject.reviews.sort((a, b) => (a.created_at > b.created_at) ? 1 : -1).reverse();
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })

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
      if (!dbCourseData) {
        res.status(404).json({ message: 'No course found with this id' });
        return;
      }

      reviewObject.course = dbCourseData.get({ plain: true });

      res.render('new-review', {
        reviewObject,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


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
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })

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
      //creates a list of all data in homeObject and sorts by created_at time
      homeObject.fullList = homeObject.played.concat(homeObject.reviews)
      homeObject.sorted = homeObject.fullList.sort((a, b) => (a.created_at > b.created_at) ? 1 : -1).reverse();

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

      res.render('courses', {
        courses,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/courses/:city', reqAuth, (req, res) => {
  Course.findAll({
    where: {
      city: req.params.city
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
