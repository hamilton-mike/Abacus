import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsBookHalf, BsPerson } from 'react-icons/bs'
import { AiOutlineCalculator } from 'react-icons/ai'
import { AiFillHome } from 'react-icons/ai'
import { Unordered, Footer } from './FooterStyle'

const FooterComponent = ({ id }) => {
  const navigate = useNavigate();

  const home = () => {
    navigate(`/${id}/home`)
  }

  const account = () => {
    navigate(`/${id}/account`)
  }

  const cal = () => {
    navigate(`/${id}/calculator`)
  }

  const edu = () => {
    navigate(`/${id}/education`)
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
