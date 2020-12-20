// import all models
const User = require('./User');
const Course = require('./Course');
const Review = require('./Review');
const Favorite = require('./Favorite');
const Played = require('./Played');

// create associations
User.hasMany(Review, {
    foreignKey: 'user_id'
});

Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Course.hasMany(Review, {
    foreignKey: 'course_id'
});

Review.belongsTo(Course, {
    foreignKey: 'course_id',
    onDelete: 'SET NULL'
});

User.hasMany(Played, {
    foreignKey: 'user_id'
});

Played.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Course.hasMany(Played, {
    foreignKey: 'course_id'
});

Played.belongsTo(Course, {
    foreignKey: 'course_id',
    onDelete: 'SET NULL'
});

User.belongsToMany(Course, {
    through: Favorite,
    as: 'favorited_courses',
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Course.belongsToMany(User, {
    through: Favorite,
    as: 'favorited_courses',
    foreignKey: 'course_id',
    onDelete: 'SET NULL'
});

Course.hasMany(Favorite, {
    foreignKey: 'course_id'
});

Favorite.belongsTo(Course, {
    foreignKey: 'course_id',
    onDelete: 'SET NULL'
});

module.exports = { User, Course, Review, Favorite, Played };