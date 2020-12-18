const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create the Review model
class Review extends Model {}

// create fields for Review model
Review.init(
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
        review_title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        },
        review_content: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isIn: [[1, 2, 3, 4, 5]]
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'review'
    }
);

module.exports = Review;