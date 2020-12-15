// import all models
const User = require('./User');
const Course = require('./Course');
const Review = require('./Review');
const Rate = require('./Rate');
const Favorite = require('./Favorite');

// create associations
User.hasMany(Review, {
    foreignKey: 'user_id'
});

Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

User.hasMany(Rate, {
    foreignKey: 'user_id'
});

Rate.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

User.hasMany(Favorite, {
    foreignKey: 'user_id'
});

Favorite.belongsTo(User, {
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

Course.hasMany(Rate, {
    foreignKey: 'course_id'
});

Rate.belongsTo(Course, {
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

module.exports = { User, Course, Review, Rate, Favorite };