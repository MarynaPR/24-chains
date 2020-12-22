const { Saved } = require('../models');
const sequelize = require('../config/connection');

const saveddata = [
    {
        course_id: 1,
        user_id: 2
    },
    {
        course_id: 3,
        user_id: 3
    },
    {
        course_id: 43,
        user_id: 4
    },
    {
        course_id: 7,
        user_id: 1
    },
    {
        course_id: 37,
        user_id: 5
    },
    {
        course_id: 30,
        user_id: 4
    },
    {
        course_id: 24,
        user_id: 9
    },
    {
        course_id: 29,
        user_id: 3
    },
    {
        course_id: 81,
        user_id: 2
    },
    {
        course_id: 40,
        user_id: 1
    },
    {
        course_id: 44,
        user_id: 4
    },
    {
        course_id: 32,
        user_id: 3
    },
    {
        course_id: 51,
        user_id: 1
    },
    {
        course_id: 18,
        user_id: 2
    },
    {
        course_id: 12,
        user_id: 3
    },
    {
        course_id: 17,
        user_id: 2
    },
    {
        course_id: 6,
        user_id: 4
    },
    {
        course_id: 5,
        user_id: 3
    },
    {
        course_id: 22,
        user_id: 1
    },
    {
        course_id: 14,
        user_id: 3
    },
    {
        course_id: 15,
        user_id: 3
    }
]

const seedSaved = () => Saved.bulkCreate(saveddata);

module.exports = seedSaved;