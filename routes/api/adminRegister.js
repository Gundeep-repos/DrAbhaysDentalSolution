const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const AdminRegister = require('../../models/AdminRegister');

// @route   POST api/adminregister
// @desc    admin registeration
// @access  Public
router.post(
  '/',
  [
    check('email', 'Enter a valid Email').isEmail(),
    check('password', 'Password should be more than 6 characters').isLength({
      min: 6,
    }),
    check('secretkey', 'Enter the Security key please').exists(),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, secretkey } = req.body;

    try {
      adminregister = new AdminRegister({
        email,
        password,
        secretkey,
      });
      await adminregister.save();

      res.send('Admin Registered!');
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
