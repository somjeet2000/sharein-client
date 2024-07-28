import React, { useState, useContext } from 'react';
import Logo2 from '../images/Logo2.png';
import { Link, useNavigate } from 'react-router-dom';
import authContext from '../context/authentication/AuthenticationContext';
import Alert from './Alert';
import alertContext from '../context/alert/AlertContext';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const context = useContext(authContext);
  const { registerUser } = context;
  const navigate = useNavigate();
  const context2 = useContext(alertContext);
  const { alert, showAlert } = context2;

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);

    switch (name) {
      case 'firstName':
        setFirstNameError('');
        setFirstName(value);
        break;

      default:
        break;
    }
    switch (name) {
      case 'lastName':
        setLastNameError('');
        setLastName(value);
        break;

      default:
        break;
    }
    switch (name) {
      case 'email':
        setEmailError('');
        setEmail(value);
        break;

      default:
        break;
    }
    switch (name) {
      case 'password':
        setPasswordError('');
        setPassword(value);
        break;

      default:
        break;
    }
    switch (name) {
      case 'confirmPassword':
        setConfirmPasswordError('');
        setConfirmPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Regular expression for password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/;
    let isValid = true;
    if (firstName.length === 0) {
      setFirstNameError('First Name cannot be empty');
      isValid = false;
    }
    if (lastName.length === 0) {
      setLastNameError('Last Name cannot be empty');
      isValid = false;
    }
    if (email.length === 0) {
      setEmailError('Email cannot be empty');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email');
      isValid = false;
    }
    if (password.length === 0) {
      setPasswordError('Password cannot be empty');
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError('Password must be of atleast 8 character or more');
      isValid = false;
    } else if (!passwordRegex.test(password)) {
      setPasswordError(
        'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character.'
      );
      isValid = false;
    }
    if (confirmPassword.length === 0) {
      setConfirmPasswordError('Confirm Password cannot be empty');
      isValid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Password doesn't matches");
      isValid = false;
    }
    if (isValid) {
      showAlert('Please Wait...', 'info');
      await registerUser({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        navigate,
      });
    }
  };
  return (
    <>
      <Alert alert={alert} />
      <div className="container my-1">
        <div className="row">
          <img
            src={Logo2}
            alt="ShareIn"
            className="img-fluid rounded col"
            style={{ height: '20rem', width: '30rem', marginTop: '5rem' }}
          />
          <form className="col" onSubmit={handleSubmit}>
            <div className="text-center my-2">
              <h2>Introduce Yourself 👋</h2>
            </div>
            <div className="row g-3">
              <div className="col-md-6 mb-1">
                <label htmlFor="inputFirstName" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputFirstName"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                />
                <p
                  style={{
                    color: '#bf2d31',
                    fontWeight: '500',
                    marginTop: '1rem',
                  }}
                >
                  {firstNameError}
                </p>
              </div>
              <div className="col-md-6 mb-1">
                <label htmlFor="inputLastName" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputLastName"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                />
                <p
                  style={{
                    color: '#bf2d31',
                    fontWeight: '500',
                    marginTop: '1rem',
                  }}
                >
                  {lastNameError}
                </p>
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
                value={email}
                onChange={handleChange}
                name="email"
              />
            </div>
            <p style={{ color: '#bf2d31', fontWeight: '500' }}>{emailError}</p>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={handleChange}
                name="password"
              />
            </div>
            <p style={{ color: '#bf2d31', fontWeight: '500' }}>
              {passwordError}
            </p>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword2" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword2"
                value={confirmPassword}
                onChange={handleChange}
                name="confirmPassword"
              />
            </div>
            <p style={{ color: '#bf2d31', fontWeight: '500' }}>
              {confirmPasswordError}
            </p>
            <p>
              Already Registered? <Link to="/login">Login here</Link>
            </p>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
