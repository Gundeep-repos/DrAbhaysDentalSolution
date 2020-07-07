const express = require('express');

const router = express.Router();

// @route   GET api/manageadmin
// @desc    managing everything by admin
// @access  Public
router.get('/', (req, res) => res.send('admin management route'));

module.exports = router;
