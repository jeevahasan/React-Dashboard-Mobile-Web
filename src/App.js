// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicNavBar from './pages/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import ReactDOM from 'react-dom/client';
import React from 'react';
import Home from './pages/home';
import Profile from './pages/profile';
import UserList from './pages/userlist';

function App() {
  return (
    <BrowserRouter>
      <BasicNavBar />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
export default App;
