import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import { isLoggedIn } from './utils/auth';
import Tasks from './pages/Tasks';
import Logout from './pages/Logout';
import Contacts from './pages/Contacts';
import Leads from './pages/Leads';
import Settings from './pages/Settings';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      const loggedIn = await isLoggedIn();
      setAuthenticated(loggedIn);
      setLoading(false);
    };

    checkAuthentication();
  }, []);

  if (loading) {
    return <div>Redirecting...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={authenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/settings" element={<Settings />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />


      </Routes>
    </Router>
  );
}

export default App;
