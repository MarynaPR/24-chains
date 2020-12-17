const { Review } = require('../models');
const sequelize = require('../config/connection');

const reviewdata = [
    {
         course_id: 1,
         user_id: 2,
         review_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut undedignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturirepellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consecteturadipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illummagni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor,sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapienteerror vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitislaudantium!',
         rating: 4
    },
    {
        course_id: 1,
        user_id: 2,
        review_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut undedignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturirepellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consecteturadipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illummagni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor,sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapienteerror vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitislaudantium!',
        rating: 3
   },
   {
        course_id: 2,
        user_id: 1,
        review_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut undedignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturirepellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consecteturadipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illummagni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor,sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapienteerror vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitislaudantium!',
        rating: 5
    },
    {
        course_id: 3,
        user_id: 3,
        review_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut undedignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturirepellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consecteturadipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illummagni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor,sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapienteerror vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitislaudantium!',
        rating: 2
    },
    {
        course_id: 3,
        user_id: 3,
        review_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut undedignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturirepellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consecteturadipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illummagni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor,sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapienteerror vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitislaudantium!',
        rating: 5
   },
   {
       course_id: 4,
       user_id: 3,
       review_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut undedignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturirepellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consecteturadipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illummagni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor,sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapienteerror vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitislaudantium!',
       rating: 3
  },
  {
       course_id: 4,
       user_id: 2,
       review_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut undedignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturirepellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consecteturadipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illummagni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor,sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapienteerror vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitislaudantium!',
       rating: 1
   },
   {
       course_id: 1,
       user_id: 4,
       review_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut undedignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturirepellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consecteturadipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illummagni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor,sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapienteerror vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitislaudantium!',
       rating: 4
   },
   {
        course_id: 5,
        user_id: 1,
        review_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut undedignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturirepellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consecteturadipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illummagni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor,sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapienteerror vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitislaudantium!',
        rating: 3
    },
    {
        course_id: 3,
        user_id: 2,
        review_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut undedignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturirepellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consecteturadipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illummagni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor,sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapienteerror vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitislaudantium!',
        rating: 5
    },
    {
        course_id: 10,
        user_id: 4,
        review_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut undedignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturirepellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consecteturadipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illummagni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor,sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapienteerror vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitislaudantium!',
        rating: 4
    },
    {
        course_id: 11,
        user_id: 5,
        review_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut undedignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturirepellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consecteturadipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illummagni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor,sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapienteerror vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitislaudantium!',
        rating: 4
    },
    {
        course_id: 21,
        user_id: 2,
        review_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut undedignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturirepellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consecteturadipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illummagni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor,sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapienteerror vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitislaudantium!',
        rating: 4
   },
   {
       course_id: 31,
       user_id: 2,
       review_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut undedignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturirepellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consecteturadipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illummagni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor,sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapienteerror vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitislaudantium!',
       rating: 3
  },
  {
       course_id: 22,
       user_id: 1,
       review_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut undedignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturirepellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consecteturadipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illummagni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor,sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapienteerror vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitislaudantium!',
       rating: 5
   },
   {
       course_id: 13,
       user_id: 3,
       review_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut undedignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturirepellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consecteturadipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illummagni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor,sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapienteerror vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitislaudantium!',
       rating: 2
   },
   {
       course_id: 33,
       user_id: 3,
       review_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut undedignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturirepellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consecteturadipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illummagni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor,sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapienteerror vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitislaudantium!',
       rating: 5
  },
  {
      course_id: 44,
      user_id: 3,
      review_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut undedignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturirepellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consecteturadipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illummagni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor,sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapienteerror vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitislaudantium!',
      rating: 3
 },
 {
      course_id: 64,
      user_id: 2,
      review_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut undedignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturirepellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consecteturadipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illummagni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor,sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapienteerror vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitislaudantium!',
      rating: 1
  },
  {
      course_id: 16,
      user_id: 4,
      review_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut undedignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturirepellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consecteturadipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illummagni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor,sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapienteerror vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitislaudantium!',
      rating: 4
  },
  {
       course_id: 57,
       user_id: 1,
       review_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut undedignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturirepellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consecteturadipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illummagni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor,sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapienteerror vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitislaudantium!',
       rating: 3
   },
   {
       course_id: 33,
       user_id: 2,
       review_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut undedignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturirepellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consecteturadipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illummagni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor,sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapienteerror vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitislaudantium!',
       rating: 5
   },
   {
       course_id: 22,
       user_id: 4,
       review_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut undedignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturirepellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consecteturadipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illummagni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor,sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapienteerror vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitislaudantium!',
       rating: 4
   },
   {
       course_id: 69,
       user_id: 5,
       review_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ut undedignissimos, eligendi, magnam ipsam sapiente error vitae saepe illum magni! Explicabo excepturirepellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor, sit amet consecteturadipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapiente error vitae saepe illummagni! Explicabo excepturi repellendus beatae quasi numquam ullam debitis laudantium! Lorem ipsum dolor,sit amet consectetur adipisicing elit. Aperiam ut unde dignissimos, eligendi, magnam ipsam sapienteerror vitae saepe illum magni! Explicabo excepturi repellendus beatae quasi numquam ullam debitislaudantium!',
       rating: 4
   }
]

const seedReviews = () => Review.bulkCreate(reviewdata);

module.exports = seedReviews;