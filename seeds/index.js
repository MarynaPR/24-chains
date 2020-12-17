const seedCourses = require('./course-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('------');
    await seedCourses();

    process.exit(0);
};

seedAll();