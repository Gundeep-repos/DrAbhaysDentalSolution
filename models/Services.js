const mongoose = require('mongoose');

const ServicesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = Services = mongoose.model('service', ServicesSchema);
