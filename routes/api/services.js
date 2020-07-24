const express = require('express');
const Services = require('../../models/Services');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route   GET api/services
// @desc    Available Services
// @access  Public

router.get(
  '/',
  [
    check('name', 'A name is required').not().isEmpty(),
    check('description', 'Provide Some Description for the Service').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    const { name, description } = req.body;

    try {
      services = new Services({
        name,
        description,
      });

      await services.save();
      res.send('Servcie Added');
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
