import React from 'react';
import Logo from '../images/Logo.png';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  let location = useLocation();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary nav-underline">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={Logo}
              alt="ShareIn"
              className="img-fluid rounded mx-5"
              style={{ height: '2.5rem', width: '8rem' }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === '/' ? 'active' : ''
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === '/dashboard' ? 'active' : ''
                  }`}
                  to="#"
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === '/groups' ? 'active' : ''
                  }`}
                  to="#"
                >
                  Groups
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === '/addexpense' ? 'active' : ''
                  }`}
                  to="#"
                >
                  Add Expense
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === '/profile' ? 'active' : ''
                  }`}
                  to="#"
                >
                  Profile
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <Link to="/login">
                <button className="btn btn-outline-primary mx-2" type="submit">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="btn btn-success mx-2" type="submit">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
