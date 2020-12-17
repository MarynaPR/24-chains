const sequelize = require('../config/connection');
const { User, Review } = require('../models');

const userdata = [
    {
        email: 'leftiethrower0@test.com',
        username: 'lefthandthrower',
        password: 'easyguess123',
        firstname: 'bob',
        lastname: 'johnson'
    },
    {
        email: 'layout5@yahoo.com',
        username: 'mystart5',
        password: '1youllneverguess',
        fistname: 'mary',
        lastname: 'richardson'
    },
    {
        email: 'carousel123@last.com',
        username: 'breadcrumbs',
        password: 'condition',
        fistname: 'linda',
        lastname: 'banks'
    },
    {
        email: 'badge3@gmail.com',
        username: 'dsdropdown3',
        password: 'pasfgfgs3',
        fistname: 'jeff',
        lastname: 'harrison'
    },
    {
        email: 'progress4@weather.com',
        username: 'jumpandthrow',
        password: 'passrtaefb3',
        fistname: 'tom',
        lastname: 'smith'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });
module.exports = seedUsers;