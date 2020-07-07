const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const StaffUser = require('../../models/StaffUser');
const bcrypt = require('bcryptjs');

// @route   POST api/staffuser
// @desc    staff users
// @access  Public
router.post(
  '/',
  [
    check('name', 'A name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({
      min: 6,
    }),
    check('phone', 'Enter a valid phone number').isNumeric().isLength({
      min: 10,
      max: 12,
    }),
  ],
  async (req, res) => {
    // console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, doj, phone, address, notes } = req.body;

    try {
      //see if user already exists

      let staffuser = await StaffUser.findOne({ email });
      if (staffuser) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      staffuser = new StaffUser({
        name,
        email,
        password,
        doj,
        phone,
        address,
        notes,
      });

      //Encrypt password
      const salt = await bcrypt.genSalt(10);
      staffuser.password = await bcrypt.hash(password, salt);
      await staffuser.save();
      //jsonwebtoken
      res.send('User Registered');
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
