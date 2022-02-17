import React from 'react'
import HeaderComponent from '../Components/Header/HeaderComponent'
import FooterComponent from '../Components/Footer/FooterComponent'
import DetailsComponent from '../Components/Account/Details/DetailsComponent'
import ActivitiesComponent from '../Components/Account/Activities/ActivitiesComponent'
import RecentComponent from '../Components/Home/Recent/RecentComponent'

const AccountPage = () => {
  return (
      <>
        <HeaderComponent />
        <DetailsComponent />
        <ActivitiesComponent />

        <section id="graph">
            <h1>Balance</h1>
            <span>$15,560.00</span>
        </section>

        <RecentComponent />
        <FooterComponent />
      </>
  )
}

export default AccountPage
