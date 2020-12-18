const router = require('express').Router();
const { Course } = require('../models');

router.get("/courses", (req, res) => {
    Course.findAll({
      attributes: ['id', 'course_name', 'holes', 'par', 'established', 'zipcode']
     
    })
      .then((dbCourseData) => res.json(dbCourseData))
      .catch((err) => {
        res.status(500).json(err);
      });
  });

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
      res.redirect('/');
      return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
   
    res.render('signup');
})

module.exports = router;