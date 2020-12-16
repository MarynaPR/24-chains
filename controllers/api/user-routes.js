const router = require('express').Router();
const { User } = require('../../models');

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    })
    .then(dbUser => {
        req.session.save(() => {
            req.session.userId = dbUser.id;
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

module.exports = router;