const express = require('express');

const router = express.Router();

// @route   GET api/auth
// @desc    authentication while login
// @access  Public
router.get('/', (req, res) => res.send('Staff user auth route'));

module.exports = router;
