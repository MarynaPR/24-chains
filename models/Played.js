const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create the Played model
class Played extends Model{}

// create fields for Played model
Played.init(
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
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'played'
    }
);

module.exports = Played;