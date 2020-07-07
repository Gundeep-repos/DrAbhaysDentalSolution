const mongoose = require('mongoose');

const StaffUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  doj: {
    type: Date,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  notes: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = StaffUser = mongoose.model('staffuser', StaffUserSchema);
