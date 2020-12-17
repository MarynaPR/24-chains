const router = require('express').Router();
const { Played, User, Course } = require('../../models');

// get all played courses
router.get('/', (req, res) => {
    Played.findAll({
        attributes: [
            'id',
            'score',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Course,
                attributes: ['course_name']
            }
        ]
    })
    .then(dbPlayedData => res.json(dbPlayedData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get one played course
router.get('/:id', (req, res) => {
    Played.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'score',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Course,
                attributes: ['course_name']
            }
        ]
    })
    .then(dbPlayedData => {
        if(!dbPlayedData) {
            res.status(404).json({ message: 'No course played found with this id'});
            return;
        }
        res.json(dbPlayedData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create a played course
router.post('/', (req, res) => {
    Played.create({
        course_id: req.body.course_id,
        user_id: req.body.user_id,
        score: req.body.score
    })
    .then(dbPlayedData => res.json(dbPlayedData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// update a played course
router.put('/:id', (req, res) => {
    Played.update(
        {
            score: req.body.score
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbPlayedData => {
        if(!dbPlayedData) {
            res.status(404).json({ message: 'No course played found with this id'});
            return;
        }
        res.json(dbPlayedData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete a played course
router.delete('/:id', (req, res) => {
    Played.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPlayedData => {
        if(!dbPlayedData) {
            res.status(404).json({ message: 'No course played found with this id'});
            return;
        }
        res.json(dbPlayedData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;