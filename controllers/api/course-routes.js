const router = require('express').Router();
const { Course, Review, User, Favorite } = require('../../models');

// get all courses
router.get('/', (req, res) => {
    Course.findAll({
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
                model: Review,
                attributes: ['id', 'review_content', 'rating'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username'],
                through: Favorite,
                as: 'favorited_courses'
            }
        ]
    })
    .then(dbCourseData => res.json(dbCourseData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get one course
router.get('/:id', (req, res) => {
    Course.findOne({
        where: {
            id: req.params.id
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
                model: Review,
                attributes: ['id', 'review_content', 'rating'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username'],
                through: Favorite,
                as: 'favorited_courses'
            }
        ]
    })
    .then(dbCourseData => {
        if(!dbCourseData) {
            res.status(404).json({ message: 'No course found with this id'});
            return;
        }
        res.json(dbCourseData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create a course
router.post('/', (req, res) => {
    Course.create({
        course_name: req.body.course_name,
        holes: req.body.holes,
        par: req.body.par,
        established: req.body.established,
        zipcode: req.body.zipcode
    })
    .then(dbCourseData => res.json(dbCourseData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// favorite a course
router.put('/favorite', (req, res) => {
    Course.favorite({ ...req.body, user_id: req.body.user_id }, { Favorite, Course, User, Review })
    .then(updatedFavoriteData => res.json(updatedFavoriteData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Update a course
router.put('/:id', (req, res) => {
    Course.update(
        {
            course_name: req.body.course_name,
            holes: req.body.holes,
            par: req.body.par,
            established: req.body.established,
            zipcode: req.body.zipcode
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbCourseData => {
        if(!dbCourseData) {
            res.status(404).json({ message: 'No course found with this id'});
            return;
        }
        res.json(dbCourseData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Delete a course
router.delete('/:id', (req, res) => {
    Course.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCourseData => {
        if(!dbCourseData) {
            res.status(404).json({ message: 'No course found with this id'});
            return;
        }
        res.json(dbCourseData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;