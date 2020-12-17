const router = require('express').Router();
const { Course, User, Favorite } = require('../../models');

// get all favorites
router.get('/', (req, res) => {
    Favorite.findAll({
        attributes: ['id'],
        include: [
            {
                model: Course,
                attributes: ['course_name']
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbFavoriteData => res.json(dbFavoriteData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get one favorite
router.get('/:id', (req, res) => {
    Favorite.findAll({
        where: {
            id: req.params.id
        },
        attributes: ['id'],
        include: [
            {
                model: Course,
                attributes: ['course_name']
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbFavoriteData => {
        if(!dbFavoriteData) {
            res.status(404).json({ message: 'No favorite found with this id'});
            return;
        }
        res.json(dbFavoriteData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create a favorite
router.post('/', (req, res) => {
    Favorite.create({
        user_id: req.params.user_id,
        course_id: req.params.course_id
    })
    .then(dbFavoriteData => res.json(dbFavoriteData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// update a favorite
router.put('/:id', (req, res) => {
    Favorite.update(
        {
            where: {
                id: req.params.id
            }
        },
        {
            user_id: req.params.user_id,
            course_id: req.params.course_id
        }
    )
    .then(dbFavoriteData => {
        if(!dbFavoriteData) {
            res.status(404).json({ message: 'No favorite found with this id'});
            return;
        }
        res.json(dbFavoriteData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete a favorite
router.delete('/:id', (req, res) => {
    Favorite.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbFavoriteData => {
        if(!dbFavoriteData) {
            res.status(404).json({ message: 'No favorite found with this id'});
            return;
        }
        res.json(dbFavoriteData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;