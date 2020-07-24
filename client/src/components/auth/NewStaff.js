import React, { Fragment, useState } from 'react';

export const NewStaff = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    doj: '',
    notes: '',
  });

  const { name, email, password, phone, address, doj, notes } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('Success');
    // const newStaffuser = {
    //   name,
    //   email,
    //   password,
    //   phone,
    //   address,
    //   doj,
    //   notes,
    // };
    // try {
    //   const config = {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   };

    //   const body = JSON.stringify(newStaffuser);
    //   const res = await axios.post('/api/staffuser', body, config);
    //   console.log(res.data);
    // } catch (err) {
    //   console.error(err.response.data);
    // }
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Register New Staff Member
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => onChange(e)}
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => onChange(e)}
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => onChange(e)}
            name="password"
            minLength="6"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => onChange(e)}
            name="phone"
            minLength="10"
            maxLength="12"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => onChange(e)}
            name="address"
          />
        </div>
        <div className="form-group">
          <p className="lead">Date of Joining</p>
          <input
            type="date"
            value={doj}
            onChange={(e) => onChange(e)}
            name="doj"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Add a Note"
            value={notes}
            onChange={(e) => onChange(e)}
            name="notes"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
    </Fragment>
  );
};

export default NewStaff;
