const mongoose = require('mongoose');

const AdminRegisterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  secretkey: {
    type: Number,
    required: true,
  },
});

module.exports = AdminRegister = mongoose.model('admin', AdminRegisterSchema);
