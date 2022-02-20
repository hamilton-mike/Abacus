import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import HomePage from './Pages/HomePage';
import AccountPage from './Pages/AccountPage';
import EducationPage from './Pages/Education';
import CalculatorPage from './Pages/Calculator';
import UserFormPage from './Pages//UserForm/UserFormPage'

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='form' element={<UserFormPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/account' element={<AccountPage />} />
      <Route path='/education' element={<EducationPage />} />
      <Route path='/calculator' element={<CalculatorPage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
