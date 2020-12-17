// import all models
const User = require('./User');
const Course = require('./Course');
const Review = require('./Review');
const Favorite = require('./Favorite');

// create associations
User.hasMany(Review, {
    foreignKey: 'user_id'
});

Review.belongsTo(User, {
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

Course.hasMany(Favorite, {
    foreignKey: 'course_id'
});

Favorite.belongsTo(Course, {
    foreignKey: 'course_id',
    onDelete: 'SET NULL'
});

User.belongsToMany(Course, {
    through: Favorite,
    as: 'favorited_course',
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Course.belongsToMany(User, {
    through: Favorite,
    as: 'favorited_course',
    foreignKey: 'course_id',
    onDelete: 'SET NULL'
})

module.exports = { User, Course, Review, Favorite };