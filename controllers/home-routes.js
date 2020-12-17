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

  module.exports = router;