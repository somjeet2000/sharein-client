import React from 'react';
import Logo from '../images/Logo.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container my-3">
      <h2 className="text-center">Login to continue in ShareIn 👋</h2>
      {/* <div className="text-center my-3">
        <img
          src={Logo}
          alt="ShareIn"
          style={{ height: '5rem', width: '15rem' }}
        />
      </div> */}
      <form>
        <div className="mb-3 my-4">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
        <p>
          New User? <Link to="/signup">Register here</Link>
        </p>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
