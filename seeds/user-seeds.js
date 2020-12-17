const sequelize = require('../config/connection');
const { User, Review } = require('../models');

const userdata = [
    {
        username: 'lefthandthrower',
        email: 'leftiethrower0@test.com',
        password: 'easyguess123'
    },
    {
        username: 'mystart5',
        email: 'layout5@yahoo.com',
        password: '1youllneverguess'
    },
    {
        username: 'breadcrumbs',
        email: 'carousel123@last.com',
        password: 'condition'
    },
    {
        username: 'dsdropdown3',
        email: 'badge3@gmail.com',
        password: 'pasfgfgs3'
    },
    {
        username: 'jumpandthrow',
        email: 'progress4@weather.com',
        password: 'passrtaefb3'
    }

];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });
module.exports = seedUsers;