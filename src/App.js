import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/signup" element={<SignUp setLoggedIn={setLoggedIn} />} />
          <Route path="/*" element={loggedIn ? <Home /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;