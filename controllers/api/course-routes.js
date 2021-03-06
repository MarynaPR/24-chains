const router = require('express').Router();
const { Course, Review, User, Favorite, Saved } = require('../../models');

router.get('/', (req, res) => {
    Course.findAll({
        attributes: [
            'id',
            'course_name',
            'holes',
            'par',
            'established',
            'city',
            'state',
            'zipcode'
        ],
        include: [
            {
                model: Review,
                attributes: ['id', 'review_title', 'review_content', 'rating'],
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

router.post("/search", (req, res) => {
    console.log(req.body)
    res.json({ success: true })
})

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
            'city',
            'state',
            'zipcode'
        ],
        include: [
            {
                model: Review,
                attributes: ['id', 'review_title', 'review_content', 'rating'],
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
            if (!dbCourseData) {
                res.status(404).json({ message: 'No course found with this id' });
                return;
            }
            res.json(dbCourseData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/city/:city', (req, res) => {
    Course.findAll({
        where: {
            city: req.params.city
        },
        attributes: [
            'id',
            'course_name',
            'holes',
            'par',
            'established',
            'city',
            'state',
            'zipcode'
        ]
    })
        .then(dbCourseData => {
            if (!dbCourseData) {
                res.status(404).json({ message: 'No course found in this city' });
                return;
            }
            res.json(dbCourseData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Course.create({
        course_name: req.body.course_name,
        holes: req.body.holes,
        par: req.body.par,
        established: req.body.established,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode
    })
        .then(dbCourseData => res.json(dbCourseData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/favorite', (req, res) => {
    Course.favorite({ ...req.body, user_id: req.session.userId }, { Favorite, Course, User, Review })
        .then(updatedFavoriteData => res.json(updatedFavoriteData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/saved', (req, res) => {
    Course.saved({ ...req.body, user_id: req.session.userId }, { Saved, Course, User, Review })
        .then(updatedSavedData => res.json(updatedSavedData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Course.update(
        {
            course_name: req.body.course_name,
            holes: req.body.holes,
            par: req.body.par,
            established: req.body.established,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbCourseData => {
            if (!dbCourseData) {
                res.status(404).json({ message: 'No course found with this id' });
                return;
            }
            res.json(dbCourseData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Course.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCourseData => {
            if (!dbCourseData) {
                res.status(404).json({ message: 'No course found with this id' });
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