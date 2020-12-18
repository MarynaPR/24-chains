const router = require('express').Router();
const { User, Favorite, Course } = require('../../models');

// get all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password']}
    })
    .then((dbCourseData) => res.json(dbCourseData))
    .catch((err) => {
        res.status(500).json(err);
    });
});

// get one user
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        attributes: { exclude: ['password']},
        include: [
            {
                model: Course,
                attributes: ['course_name'],
                through: Favorite,
                as: 'favorited_courses'
            }
        ]
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'No user found with this id'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create a user
router.post('/', (req, res) => {
    User.create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    })
    .then(dbUser => {
        req.session.save(() => {
            req.session.userId = dbUser.id;
            req.session.email = dbUser.email,
            req.session.username = dbUser.username;
            req.session.firstname = dbUser.firstname;
            req.session.lastname = dbUser.lastname;
            req.session.loggedIn = true;

            res.json(dbUser);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

// login as a user
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }        
    }).then(dbUser => {
        if(!dbUser) {
            res.status(400).json({ message: 'No account found with that username' });
            return;
        }

        const correctPass = dbUser.checkPassword(req.body.password);

        if(!correctPass) {
            res.status(400).json({ message: 'Incorrect password' });
            return;
        }

        req.session.save(() => {
            req.session.userId = dbUser.id;
            req.session.username = dbUser.username;
            req.session.loggedIn = true;
            
            res.json({ user: dbUser, message: 'You are now logged in' });
        });
    });
});

// logout as a user
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.json({ message: 'You are now logged out' })
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// update a user
router.put('/:id', (req,res) => {
    User.update(
        {
            email: req.body.email,
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'No user found with this id'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete a user
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'No user found with this id'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;