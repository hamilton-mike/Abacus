import React from 'react'
import HeaderComponent from '../Components/Header/HeaderComponent'
import FooterComponent from '../Components/Footer/FooterComponent'

const Calculator = () => {
  return (
    <>
        <HeaderComponent />
            <h1 style={{ textAlign: 'center' }}>Retirement Calculator</h1>
            <p>I am __ years old, my pre-tax income is _______, and I have current savings of $_________</p>
            
        <FooterComponent />
    </>
  )
}

export default Calculator
