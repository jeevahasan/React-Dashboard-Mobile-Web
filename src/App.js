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
import WordApi from './apis/wordapi';
import WeatherApi from './apis/weatherapi';
import Notes from './components/Notes/Notes';
import Calculator from './components/Calculator/Calculator';
import MovieApi from './apis/movieapi';

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
          <Route path="/wordapi" element={<WordApi />}/>
          <Route path="/weatherapi" element={<WeatherApi />}/>
          <Route path="/movieapi" element={<MovieApi />}/>
          <Route path="/notes" element={<Notes />}/>
          <Route path="/calculator" element={<Calculator />}/>
        </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
export default App;
