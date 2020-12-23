const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create the Favorite model
class Favorite extends Model {}

// create fields for Favorite model
Favorite.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        course_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'course',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
            model: 'user',
            key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'favorite'
    }
);

module.exports = Favorite;