import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeaderComponent from '../Components/Header/HeaderComponent'
import FooterComponent from '../Components/Footer/FooterComponent'
import CalculatorTotals from '../Components/Calculator/CalculatorTotals'
import axios from 'axios';

const Calculator = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const { id } = params;

  const fromBackend = async () => {
    try {
      const users = await axios('http://localhost:9000/user');
      const userById = users.data.filter(user => user._id === id);
      setUserData(userById['0']);
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fromBackend()
  }, [])

  return (
    <>
    { loading ? <h1>hi</h1> : (
      <>
        <HeaderComponent />
            <h1 style={{ textAlign: 'center' }}>Retirement Calculator</h1>
            <p>I am __ years old, my pre-tax income is _______, and I have current savings of $_________</p>
            <CalculatorTotals/>
        <FooterComponent id={userData._id} />
      </>
    )}
    </>
  )
}

export default Calculator
