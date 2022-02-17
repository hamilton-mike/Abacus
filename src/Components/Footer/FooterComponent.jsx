import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsBookHalf, BsPerson } from 'react-icons/bs'
import { AiOutlineCalculator } from 'react-icons/ai'
import { AiFillHome } from 'react-icons/ai'
import { RedBorder } from '../../globalStyles'
import { Unordered, Footer } from './FooterStyle'

const FooterComponent = () => {
  const navigate = useNavigate();

  const home = () => {
    navigate('/home')
  }

  const account = () => {
    navigate('/account')
  }

  const edu = () => {
    navigate('/education')
  }

  const cal = () => {
    navigate('/cal')
  }

  const iconColor = {
    color: '#4EBE4D'
  }

  return (
    <Footer>
      <Unordered>
        <li onClick={home}><AiFillHome style={iconColor} size={45} /></li>
        <li onClick={edu}><BsBookHalf style={iconColor} size={45} /></li>
        <li onClick={cal}><AiOutlineCalculator style={iconColor} size={45} /></li>
        <li onClick={account}><BsPerson style={iconColor} size={45} /></li>
      </Unordered>
    </Footer>
  )
}

export default FooterComponent
