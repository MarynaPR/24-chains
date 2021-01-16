const router = require('express').Router();
const { Played, User, Course } = require('../../models');

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
                attributes: ['course_name', 'city', 'state']
            }
        ]
    })
        .then(dbPlayedData => res.json(dbPlayedData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

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
                attributes: ['course_name', 'city', 'state']
            }
        ]
    })
        .then(dbPlayedData => {
            if (!dbPlayedData) {
                res.status(404).json({ message: 'No course played found with this id' });
                return;
            }
            res.json(dbPlayedData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Played.create({
        course_id: req.body.course_id,
        user_id: req.session.userId,
        score: req.body.score
    })
        .then(dbPlayedData =>
            res.json(dbPlayedData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

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
            if (!dbPlayedData) {
                res.status(404).json({ message: 'No course played found with this id' });
                return;
            }
            res.json(dbPlayedData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Played.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPlayedData => {
            if (!dbPlayedData) {
                res.status(404).json({ message: 'No course played found with this id' });
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