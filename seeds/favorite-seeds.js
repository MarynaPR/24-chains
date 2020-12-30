const { Favorite } = require('../models');
const sequelize = require('../config/connection');

const favoritedata = [
    {
        course_id: 2,
        user_id: 1
    },
    {
        course_id: 4,
        user_id: 3
    },
    {
        course_id: 42,
        user_id: 2
    },
    {
        course_id: 6,
        user_id: 1
    },
    {
        course_id: 31,
        user_id: 5
    },
    {
        course_id: 30,
        user_id: 4
    },
    {
        course_id: 22,
        user_id: 3
    },
    {
        course_id: 20,
        user_id: 2
    },
    {
        course_id: 71,
        user_id: 3
    },
    {
        course_id: 60,
        user_id: 2
    },
    {
        course_id: 64,
        user_id: 4
    },
    {
        course_id: 32,
        user_id: 3
    },
    {
        course_id: 71,
        user_id: 1
    },
    {
        course_id: 68,
        user_id: 2
    },
    {
        course_id: 42,
        user_id: 4
    },
    {
        course_id: 7,
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
        course_id: 12,
        user_id: 1
    },
    {
        course_id: 14,
        user_id: 5
    },
    {
        course_id: 15,
        user_id: 3
    }
]

const seedFavorites = () => Favorite.bulkCreate(favoritedata);

module.exports = seedFavorites;