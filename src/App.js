// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicNavBar from './pages/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import ReactDOM from 'react-dom/client';
import React from 'react';
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
     
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
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
