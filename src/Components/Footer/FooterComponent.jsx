import React from 'react'
import { BsBookHalf, BsPerson } from 'react-icons/bs'
import { AiOutlineCalculator } from 'react-icons/ai'
import { AiFillHome } from 'react-icons/ai'
import { RedBorder } from '../../globalStyles'
import { Unordered, Footer } from './FooterStyle'

const FooterComponent = () => {
  const iconColor = {
    color: '#4EBE4D'
  }

  return (
    <Footer>
      <Unordered>
          <li><AiFillHome style={iconColor} size={45} /></li>
          <li><BsBookHalf style={iconColor} size={45} /></li>
          <li><AiOutlineCalculator style={iconColor} size={45} /></li>
        <li><BsPerson style={iconColor} size={45} /></li>
      </Unordered>
    </Footer>
        // home education cal profile
  )
}

export default FooterComponent
