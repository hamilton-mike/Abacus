import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderComponent from '../Components/Header/HeaderComponent'
import BalanceComponent from '../Components/Home/Balance/BalanceComponent'
import ActionsComponent from '../Components/Home/Actions/ActionsComponent'
import RecentComponent from '../Components/Home/Recent/RecentComponent'
import FooterComponent from '../Components/Footer/FooterComponent'
import axios from 'axios'

const HomePage = () => {
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
        <BalanceComponent income={userData.income}/>
        <ActionsComponent id={userData._id}/>
        <RecentComponent data={userData}/>
        <FooterComponent id={userData._id}/>
      </>
    )}
    </>
  )
}

export default HomePage
