import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <img
            src={require('./img/logo.jpg')}
            className="logo-img"
            alt="logo"
          />{' '}
          Dental Solutions
        </Link>
      </h1>
      <ul>
        <li>
          <a href="register.html">Request an Appointment</a>
        </li>
        <li>
          <Link to="/staffuser">Register a New Staff Member</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/stafflogin">Staff Login</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
        <li>
          <Link to="/addpatient">Add Patient</Link>
        </li>
      </ul>
    </nav>
  );
};
