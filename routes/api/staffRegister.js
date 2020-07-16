const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const StaffRegister = require('../../models/StaffRegister');

// @route   POST api/staffregister
// @desc    register: patient register
// @access  Public
router.post(
  '/',
  [
    check('name', 'A name is required').not().isEmpty(),
    check('phone', 'Add a valid phone number please').isNumeric().isLength({
      min: 10,
      max: 12,
    }),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, phone, email, appointment, note } = req.body;

    try {
      staffregister = new StaffRegister({
        name,
        email,
        phone,
        appointment,
        note,
      });
      await staffregister.save();

      res.send('patient added!');
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
