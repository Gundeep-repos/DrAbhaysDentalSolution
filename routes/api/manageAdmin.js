const express = require('express');
const Services = require('../../models/Services');
const StaffUser = require('../../models/StaffUser');
const StaffRegister = require('../../models/StaffRegister');
const router = express.Router();

// @route   GET api/manageadmin
// @desc    managing everything by admin
// @access  Public
router.get('/', (req, res) => res.send('admin management route'));

// @route   GET api/manageadmin/viewstaff
// @desc    view staff members
// @access  Public
router.get('/viewstaff', async (req, res) => {
  try {
    const staffusers = await StaffUser.find();

    if (!staffusers) {
      res.send('No Staff Member Exists');
    }
    res.send(staffusers);
  } catch (err) {
    console.log(err.message);
    res.send('Server Error');
  }
});

// @route   GET api/manageadmin/services
// @desc    view Services
// @access  Public
router.get('/services', async (req, res) => {
  try {
    const services = await Services.find();

    if (!services) {
      res.send('No service exists Exists');
    }
    res.send(services);
  } catch (err) {
    console.log(err.message);
    res.send('Server Error');
  }
});

// @route   GET api/manageadmin/adminregister
// @desc    view patients for admin
// @access  Public
router.get('/adminregister', async (req, res) => {
  try {
    const patients = await StaffRegister.find();

    if (!patients) {
      res.send('No Patient Exists');
    }
    res.send(patients);
  } catch (err) {
    console.log(err.message);
    res.send('Server Error');
  }
});

//update patients/staff members/ services

// @route    api/manageadmin/editpatient
// @desc    Admin provision to edit a patient
// @access  Private

router.post('/editpatient', async (req, res) => {
  const { name, email, phone, appointment } = req.body;

  const patientFields = {};
  if (name) patientFields.name = name;
  if (email) patientFields.email = email;
  if (phone) patientFields.phone = phone;
  if (appointment) patientFields.appointment = appointment;

  try {
    let patient = await StaffRegister.findOne({ name: req.query.namet });

    if (patient) {
      patient = await StaffRegister.findOneAndUpdate(
        { name: req.query.namet },
        { $set: patientFields },
        { new: true }
      );
      return res.json(patient);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    api/manageadmin/editservice
// @desc    Admin provision to edit a service
// @access  Private

router.post('/editservice', async (req, res) => {
  const { name, description } = req.body;

  const serviceFields = {};
  if (name) serviceFields.name = name;
  if (description) serviceFields.description = description;

  try {
    let service = await Services.findOne({ name: req.query.namet });

    if (service) {
      service = await Services.findOneAndUpdate(
        { name: req.query.namet },
        { $set: serviceFields },
        { new: true }
      );
      return res.json(service);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    api/manageadmin/editstaff
// @desc    Admin provision to edit a staff member
// @access  Private

router.post('/editstaff', async (req, res) => {
  const { name, email, doj, phone, address, notes } = req.body;

  const staffFields = {};
  if (name) staffFields.name = name;
  if (email) staffFields.email = email;
  if (doj) staffFields.doj = doj;
  if (phone) staffFields.phone = phone;
  if (address) staffFields.address = address;
  if (notes) staffFields.notes = notes;

  try {
    let staff = await StaffUser.findOne({ name: req.query.namet });

    if (staff) {
      staff = await StaffUser.findOneAndUpdate(
        { name: req.query.namet },
        { $set: staffFields },
        { new: true }
      );
      return res.json(staff);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

//deleting patients/staff members/ services

// @route   Delete api/manageadmin/deletepatient
// @desc    Admin provision to delte a patient
// @access  Public

router.delete('/deletepatient', async (req, res) => {
  await StaffRegister.findOneAndDelete({ name: req.query.namet });
  return res.send('Patient deleted');
});

// @route   Delete api/manageadmin/deleteservice
// @desc    Admin provision to delte a service
// @access  Public

router.delete('/deleteservice', async (req, res) => {
  await Services.findOneAndDelete({ name: req.query.namet });
  return res.send('Service deleted');
});

// @route   Delet api/manageadmin/deletestaff
// @desc    Admin provision to delte a staff member
// @access  Public

router.delete('/deletestaff', async (req, res) => {
  await StaffUser.findOneAndDelete({ name: req.query.namet });
  return res.send('Staff Member deleted');
});

module.exports = router;
