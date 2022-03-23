import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import HomePage from './Pages/HomePage';
import AccountPage from './Pages/AccountPage';
import EducationPage from './Pages/Education';
import CalculatorPage from './Pages/Calculator';
import UserFormPage from './Pages//UserForm/UserFormPage';
import TransactionPage from './Pages/TransactionPage';
import NewsPage from './Pages/NewsPage';

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/:id/form' element={<UserFormPage />} />
      <Route path='/:id/home' element={<HomePage />} />
      <Route path='/:id/account' element={<AccountPage />} />
      <Route path='/:id/calculator' element={<CalculatorPage />} />
      <Route path='/:id/education' element={<EducationPage />} />
      <Route path='/:id/transaction' element={<TransactionPage />} />
      <Route path='/:id/news' element={<NewsPage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
