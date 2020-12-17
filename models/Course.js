const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create the Course model
class Course extends Model {}

// create fields for Course model
Course.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        course_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        holes: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        par: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        established: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [4]
            }
        },
        zipcode: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        modelName: 'course'
    }
);

module.exports = Course;