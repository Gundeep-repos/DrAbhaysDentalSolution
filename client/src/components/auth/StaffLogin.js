import React, { Fragment, useState } from 'react';

export const StaffLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

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
      <h1 className="large text-primary">Dental Solutions Staff Login</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign in
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
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

        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
    </Fragment>
  );
};

export default StaffLogin;
