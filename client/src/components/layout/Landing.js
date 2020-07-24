import React from 'react';

export const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <div className="abhay-prof">
            <img
              src={require('./img/sampledoc.png')}
              className="abhay-img"
              alt="doctorimg"
            />
            <h1 className="lead text-primary">Dr. Abhaydeep Singh</h1>
            <h2 className="text-primary">B.D.S | MIDA</h2>
          </div>

          <h1 className="large">Dr. Abhay's Dental Solutions</h1>
          <p className="lead">Dental Clinic and Implant Center</p>
          <div className="buttons">
            <a href="register.html" className="btn btn-primary">
              Available Services
            </a>
            <a href="login.html" className="btn btn-primary">
              Request an appointment
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/dir//dr+abhay+dental+solutions+amritsar/@31.6317849,74.7757932,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x391964c93892d0b9:0x961720115b90fbc9!2m2!1d74.845834!2d31.631804"
              className="btn btn-primary"
            >
              Get Google Directions
            </a>
          </div>
          <div className="notification">
            <table className="table-hover table-bordered">
              <thead>
                <tr>
                  <th
                  //   style={{ color: light - color }}
                  >
                    Main Headlines
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="text-primary">
                    # Morning Timmings: 9:00 AM to 2:00 PM.
                  </th>
                </tr>
                <tr>
                  <th className="text-primary">
                    # Evening Timmings: 4:00 PM to 8:00 PM.
                  </th>
                </tr>
                <tr>
                  <th className="text-primary">
                    # Due to the ongoing situation, patients are requested to
                    cooperate with staff.
                  </th>
                </tr>
                <tr>
                  <th className="text-primary">
                    # All the patients are tested for Covid-19 symptoms before
                    entering the clinic.
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
