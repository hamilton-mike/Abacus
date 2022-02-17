import React from 'react'
import HeaderComponent from '../Components/Header/HeaderComponent'
import BalanceComponent from '../Components/Home/Balance/BalanceComponent'
import ActionsComponent from '../Components/Home/Actions/ActionsComponent'
import RecentComponent from '../Components/Home/Recent/RecentComponent'
import FooterComponent from '../Components/Footer/FooterComponent'

const HomePage = () => {
  return (
    <>
        <HeaderComponent />
        <BalanceComponent />
        <ActionsComponent />
        <RecentComponent />
        <FooterComponent />
    </>
  )
}

export default HomePage
