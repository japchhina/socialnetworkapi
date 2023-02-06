const router = require('express').Router();
const { User, Thought } = require('../models');
const { route } = require('./user-routes');

router.use('/users', require('./user-routes'));
router.use('/thoughts', require('./thought-routes'));

module.exports = router;