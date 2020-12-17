const { Review } = require('../models');
const sequelize = require('../config/connection');

const reviewdata = [
    {
         course_id: 1,
         user_id: 2,
         review_title: "Review Title",
         review_content: 'Lorem ipsum dolor',
         rating: 4
    },
    {
        course_id: 1,
        user_id: 2,
        review_title: "Review Title",
        review_content: 'Lorem ipsum dolor',
        rating: 3
   },
   {
        course_id: 2,
        user_id: 1,
        review_title: "Review Title",
        review_content: 'Lorem ipsum dolor',
        rating: 5
    },
    {
        course_id: 3,
        user_id: 3,
        review_title: "Review Title",
        review_content: 'Lorem ipsum dolor',
        rating: 2
    },
    {
        course_id: 3,
        user_id: 3,
        review_title: "Review Title",
        review_content: 'Lorem ipsum dolor',
        rating: 5
   },
   {
       course_id: 4,
       user_id: 3,
       review_title: "Review Title",
       review_content: 'Lorem ipsum dolor',
       rating: 3
  },
  {
       course_id: 4,
       user_id: 2,
       review_title: "Review Title",
       review_content: 'Lorem ipsum dolor',
       rating: 1
   },
   {
       course_id: 1,
       user_id: 4,
       review_title: "Review Title",
       review_content: 'Lorem ipsum dolor',
       rating: 4
   },
   {
        course_id: 5,
        user_id: 1,
        review_title: "Review Title",
        review_content: 'Lorem ipsum dolor',
        rating: 3
    },
    {
        course_id: 3,
        user_id: 2,
        review_title: "Review Title",
        review_content: 'Lorem ipsum dolor',
        rating: 5
    },
    {
        course_id: 10,
        user_id: 4,
        review_title: "Review Title",
        review_content: 'Lorem ipsum dolor',
        rating: 4
    },
    {
        course_id: 11,
        user_id: 5,
        review_title: "Review Title",
        review_content: 'Lorem ipsum dolor',
        rating: 4
    },
    {
        course_id: 21,
        user_id: 2,
        review_title: "Review Title",
        review_content: 'Lorem ipsum dolor',
        rating: 4
   },
   {
       course_id: 31,
       user_id: 2,
       review_title: "Review Title",
       review_content: 'Lorem ipsum dolor',
       rating: 3
  },
  {
       course_id: 22,
       user_id: 1,
       review_title: "Review Title",
       review_content: 'Lorem ipsum dolor',
       rating: 5
   },
   {
       course_id: 13,
       user_id: 3,
       review_title: "Review Title",
       review_content: 'Lorem ipsum dolor',
       rating: 2
   },
   {
       course_id: 33,
       user_id: 3,
       review_title: "Review Title",
       review_content: 'Lorem ipsum dolor',
       rating: 5
  },
  {
      course_id: 44,
      user_id: 3,
      review_title: "Review Title",
      review_content: 'Lorem ipsum dolor',
      rating: 3
 },
 {
      course_id: 64,
      user_id: 2,
      review_title: "Review Title",
      review_content: 'Lorem ipsum dolor',
      rating: 1
  },
  {
      course_id: 16,
      user_id: 4,
      review_title: "Review Title",
      review_content: 'Lorem ipsum dolor',
      rating: 4
  },
  {
       course_id: 57,
       user_id: 1,
       review_title: "Review Title",
       review_content: 'Lorem ipsum dolor',
       rating: 3
   },
   {
       course_id: 33,
       user_id: 2,
       review_title: "Review Title",
       review_content: 'Lorem ipsum dolor',
       rating: 5
   },
   {
       course_id: 22,
       user_id: 4,
       review_title: "Review Title",
       review_content: 'Lorem ipsum dolor',
       rating: 4
   },
   {
       course_id: 69,
       user_id: 5,
       review_title: "Review Title",
       review_content: 'Lorem ipsum dolor',
       rating: 4
   }
]

const seedReviews = () => Review.bulkCreate(reviewdata);

module.exports = seedReviews;