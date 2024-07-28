import React, { useState, useContext } from 'react';
import Logo from '../images/Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import authContext from '../context/authentication/AuthenticationContext';
import alertContext from '../context/alert/AlertContext';
import Alert from './Alert';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const context = useContext(authContext);
  const { loginUser } = context;
  const context2 = useContext(alertContext);
  const { alert, showAlert } = context2;

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);

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
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/;
    let isValid = true;

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
    } else if (!passwordRegex.test(password)) {
      setPasswordError(
        'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character.'
      );
      isValid = false;
    } else if (password.length < 8) {
      setPassword('Password must be of atleast 8 character or more');
      isValid = false;
    }
    if (isValid) {
      showAlert('Please wait! We are verifying your credentials', 'info');
      await loginUser({ email, password, navigate });
    }
  };

  return (
    <>
      <Alert alert={alert} />
      <div className="container my-3">
        <h2 className="text-center">Login to continue in ShareIn 👋</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 my-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              name="email"
              onChange={handleChange}
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
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: '#bf2d31', fontWeight: '500' }}>{passwordError}</p>
          <p>
            New User? <Link to="/signup">Register here</Link>
          </p>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
