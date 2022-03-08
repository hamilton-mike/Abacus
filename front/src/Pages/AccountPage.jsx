import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeaderComponent from '../Components/Header/HeaderComponent'
import FooterComponent from '../Components/Footer/FooterComponent'
import DetailsComponent from '../Components/Account/Details/DetailsComponent'
import ActivitiesComponent from '../Components/Account/Activities/ActivitiesComponent'
import RecentComponent from '../Components/Home/Recent/RecentComponent'
import axios from 'axios';

const AccountPage = () => {
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
    {loading ? <h1>hi</h1> : (
      <>
        <HeaderComponent />
        <DetailsComponent />
        <ActivitiesComponent />
        <section id="graph">
            <h1>Balance</h1>
            <span>$15,560.00</span>
        </section>
        <RecentComponent />
        <FooterComponent id={userData._id} />
      </>
    )}
    </>
  )
}

export default AccountPage
