const router = require('express').Router();
const { Course, Review, User, Favorite, Played } = require('../models');

// get all courses for homepage
router.get("/", (req, res) => {
  Course.findAll({
    attributes: ['id', 'course_name', 'holes', 'par', 'established', 'zipcode']

  })
    .then((dbCourseData) => {
      const courses = dbCourseData.map(course => course.get({ plain: true }));

      res.render('homepage', {
        courses,
        loggedIn: req.session.loggedIn
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

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
})

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

module.exports = router;