const express = require('express');

const router = express.Router();

// @route   GET api/staffregister
// @desc    register
// @access  Public
router.get('/', (req, res) => res.send('Staff register route'));

module.exports = router;
