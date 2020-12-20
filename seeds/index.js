const sequelize = require('../config/connection');
const seedCourses = require('./course-seeds');
const seedReviews = require('./review-seeds');
const seedUsers = require('./user-seeds');
const seedFavorites = require('./favorite-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n------DATABASE SYNCED ------\n');
    
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
        
    await seedCourses();
    console.log('\n----- COURSES SEEDED -----\n');

    await seedReviews();
    console.log('\n----- REVIEWS SEEDED -----\n');

    await seedFavorites();
    console.log('\n----- FAVORITES SEEDED -----\n');
    
    process.exit(0);
};

seedAll();