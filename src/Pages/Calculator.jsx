import React from 'react'
import HeaderComponent from '../Components/Header/HeaderComponent'
import FooterComponent from '../Components/Footer/FooterComponent'
import CalculatorTotals from '../Components/Calculator/CalculatorTotals'

const Calculator = () => {
  return (
    <>
        <HeaderComponent />
            <h1 style={{ textAlign: 'center' }}>Retirement Calculator</h1>
            <p>I am __ years old, my pre-tax income is _______, and I have current savings of $_________</p>
            
            <CalculatorTotals/>
        <FooterComponent />
    </>
  )
}

export default Calculator
