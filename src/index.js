import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './Pages/HomePage';
import AccountPage from './Pages/AccountPage';
import EducationPage from './Pages/Education';
import CalculatorPage from './Pages/Calculator';


const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/account' element={<AccountPage />} />
      <Route path='/education' element={<EducationPage />} />
      <Route path='/calculator' element={<CalculatorPage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
