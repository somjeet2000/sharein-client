import { useContext } from 'react';
import authContext from './AuthenticationContext';
import alertContext from '../alert/AlertContext';

function AuthenticationState(props) {
  const host = 'http://localhost:5000';
  const context = useContext(alertContext);
  const { showAlert } = context;

  // Register User
  const registerUser = async ({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    navigate,
  }) => {
    const response = await fetch(`${host}/api/v1/auth/create_user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      }),
    });
    const responseJSON = await response.json();
    console.log(responseJSON);
    if (responseJSON.isValid) {
      localStorage.setItem('token', responseJSON.authToken);
      showAlert('User Created Successfully', 'success');
      navigate('/dashboard');
    } else {
      showAlert(responseJSON.error, 'danger');
    }
  };

  // Login user
  const loginUser = async ({ email, password, navigate }) => {
    const response = await fetch(`${host}/api/v1/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const responseJSON = await response.json();
    console.log(responseJSON);
    if (responseJSON.isValid) {
      showAlert('User Loggedin Successfully', 'success');
      navigate('/dashboard');
    } else {
      showAlert(responseJSON.error, 'danger');
    }
  };
  return (
    <authContext.Provider value={{ registerUser, loginUser }}>
      {props.children}
    </authContext.Provider>
  );
}

export default AuthenticationState;
