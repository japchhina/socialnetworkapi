const router = require('express').Router();
const { User, Thought } = require('../models');
const { route } = require('./user-routes');

// GET all users
router.get('/users', (req, res) => {
    User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
}
)
