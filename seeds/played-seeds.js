const { Played } = require('../models');
const sequelize = require('../config/connection');

const playedData = [
    {
        course_id: 1,
        user_id: 1,
        score: 5
    },
    {
        course_id: 5,
        user_id: 2,
        score: 4
    },
    {
        course_id: 5,
        user_id: 3,
        score: 3
    },
    {
        course_id: 9,
        user_id: 4,
        score: 2
    },
    {
        course_id: 23,
        user_id: 5,
        score: 1
    },
    {
        course_id: 25,
        user_id: 1,
        score: 0
    },
    {
        course_id: 31,
        user_id: 2,
        score: -1
    },
    {
        course_id: 34,
        user_id: 3,
        score: -2
    },    {
        course_id: 34,
        user_id: 4,
        score: -3
    },
    {
        course_id: 36,
        user_id: 5,
        score: -4
    },
    {
        course_id: 39,
        user_id: 1,
        score: -5
    },
    {
        course_id: 39,
        user_id: 2,
        score: -4
    },    {
        course_id: 39,
        user_id: 3,
        score: -3
    },
    {
        course_id: 42,
        user_id: 4,
        score: -2
    },
    {
        course_id: 45,
        user_id: 5,
        score: -1
    },
    {
        course_id: 47,
        user_id: 1,
        score: 0
    },    {
        course_id: 51,
        user_id: 2,
        score: 1
    },
    {
        course_id: 52,
        user_id: 3,
        score: 2
    },
    {
        course_id: 54,
        user_id: 4,
        score: 3
    },
    {
        course_id: 69,
        user_id: 5,
        score: 4
    }
]

const seedPlayed = () => Played.bulkCreate(playedData);

module.exports = seedPlayed;