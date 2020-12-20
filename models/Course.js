const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create the Course model
class Course extends Model {
    static favorite(body, models) {
        return models.Favorite.create({
            user_id: body.user_id,
            course_id: body.course_id
        }).then(() => {
            return Course.findOne({
                where: {
                    id: body.course_id
                },
                attributes: [
                    'id',
                    'course_name',
                    'holes',
                    'par',
                    'established',
                    'zipcode'
                ],
                include: [
                    {
                        model: models.Review,
                        attributes: ['id', 'review_title', 'review_content', 'rating'],
                        include: {
                            model: models.User,
                            attributes: ['username']
                        }
                    },
                    {
                        model: models.Favorite,
                        attributes: ['id', 'course_id', 'user_id']
                    }
                ]
            });
        });
    }
}

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