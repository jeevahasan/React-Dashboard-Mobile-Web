// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import React from 'react';
import Home from './pages/private/home';
import Profile from './pages/private/profile';
import UserList from './pages/private/userlist';
import BasicNavBar from './pages/public/navbar';
import SignIn from './pages/public/signin';
import SignUp from './pages/public/signup';

function App() {
  return (
    <BrowserRouter>
        <BasicNavBar />
        <Routes>
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/userlist" element={<UserList/>} />
        </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
export default App;
