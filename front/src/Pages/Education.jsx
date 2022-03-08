import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeaderComponent from '../Components/Header/HeaderComponent'
import FooterComponent from '../Components/Footer/FooterComponent'
import OptionsComponent from '../Components/Education/Options/OptionsComponent'
import axios from 'axios';

const EducationPage = () => {
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
        <h1 style={{ textAlign: 'center' }}>Learn Which Retirement Options Suit You</h1>
        <OptionsComponent />
        <FooterComponent id={userData._id} />
      </>
    )}
    </>
  )
}

export default EducationPage
