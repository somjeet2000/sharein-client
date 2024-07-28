import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/Login';
import AuthenticationState from './context/authentication/AuthenticationState';
import Dashboard from './components/Dashboard';
import AlertState from './context/alert/AlertState';

function App() {
  return (
    <AlertState>
      <AuthenticationState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthenticationState>
    </AlertState>
  );
}

export default App;
