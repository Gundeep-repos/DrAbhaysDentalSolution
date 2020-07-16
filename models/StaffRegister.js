const mongoose = require('mongoose');

const StaffRegisterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  appointment: {
    type: Date,
    default: Date.now,
  },
  note: {
    type: String,
  },
});

module.exports = StaffRegister = mongoose.model(
  'staffregister',
  StaffRegisterSchema
);
