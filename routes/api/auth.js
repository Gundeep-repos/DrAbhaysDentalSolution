const express = require('express');
const auth = require('../../middleware/auth');
const StaffUser = require('../../models/StaffUser');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const AdminRegister = require('../../models/AdminRegister');

// @route   GET api/auth
// @desc    authentication while registering
// @access  Public
router.get('/', auth, async (req, res) => {
  try {
    const staffuser = await StaffUser.findById(req.staffuser.id).select(
      '-password'
    );
    res.json(staffuser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// to login for a staff user and get token after authenticating

// @route   POST api/auth
// @desc    staff users login authentication
// @access  Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    // console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      //see if user  exists

      let staffuser = await StaffUser.findOne({ email });
      if (!staffuser) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      //user email password to be matched

      const isMatch = await bcrypt.compare(password, staffuser.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      //jsonwebtoken
      const payload = {
        staffuser: {
          id: staffuser.id,
        },
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//admin login

// @route   POST api/auth/adminlogin
// @desc    admin login authentication
// @access  Public
router.post(
  '/adminlogin',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
    check('secretkey', 'Enter a Secret key Please').exists(),
  ],
  async (req, res) => {
    // console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, secretkey } = req.body;

    try {
      //see if user  exists

      let admin = await AdminRegister.findOne({ email });

      if (!admin) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      //user email password to be matched

      let flag = 0;

      if (password === 'chlorobenzene2' && secretkey === 8392) {
        flag = 1;
      }

      if (flag == 0) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      res.send('admin login success');
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
