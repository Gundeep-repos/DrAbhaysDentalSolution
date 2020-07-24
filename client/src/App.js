import React, { Fragment } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Landing } from './components/layout/Landing';
import { NewStaff } from './components/auth/NewStaff';
import { StaffLogin } from './components/auth/StaffLogin';
import { About } from './components/layout/About';
import { ContactUs } from './components/layout/ContactUs';
import { Services } from './components/layout/Services';
import { AddPatient } from './components/layout/AddPatient';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing}></Route>
        <section className="container">
          <Switch>
            <Route exact path="/staffuser" component={NewStaff} />
            <Route exact path="/stafflogin" component={StaffLogin} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/addpatient" component={AddPatient} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
