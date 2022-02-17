import React from 'react'
import HeaderComponent from '../Components/Header/HeaderComponent'
import FooterComponent from '../Components/Footer/FooterComponent'
import OptionsComponent from '../Components/Education/Options/OptionsComponent'

const EducationPage = () => {
  return (
    <>
        <HeaderComponent />
        <h1 style={{ textAlign: 'center' }}>Learn Which Retirement Options Suit You</h1>
        <OptionsComponent />
        <FooterComponent />
    </>
  )
}

export default EducationPage
