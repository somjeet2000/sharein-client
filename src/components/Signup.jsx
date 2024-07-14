import React from 'react';
import Logo2 from '../images/Logo2.png';

const Signup = () => {
  return (
    <div className="container my-2">
      <div className="row">
        <img
          src={Logo2}
          alt="ShareIn"
          className="img-fluid rounded col"
          style={{ height: '20rem', width: '30rem', marginTop: '5rem' }}
        />
        <form className="col">
          <div className="text-center my-3">
            <h2>Introduce Yourself 👋</h2>
          </div>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputFirstName" className="form-label">
                First name
              </label>
              <input type="text" className="form-control" id="inputFirstName" />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="inputLastName" className="form-label">
                Last name
              </label>
              <input type="text" className="form-control" id="inputLastName" />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
