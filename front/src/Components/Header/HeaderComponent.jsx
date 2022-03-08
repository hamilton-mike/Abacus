import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { One, Two, LineOne, LineTwo, Container, Logo, Arrow, Header } from './HeaderStyle'

const HeaderComponent = () => {
  const navigate = useNavigate();

  const logOut = () => {
    navigate('/')
  }

  return (
    <Header>
      <Container>
        <Arrow>
          <AiOutlineArrowLeft  onClick={logOut}/>
        </Arrow>

        <Logo>
          <One></One>
          <LineOne></LineOne>
          <Two></Two>
          <LineTwo></LineTwo>
          <One></One>
        </Logo>
      </Container>

    </Header>
  )
}

export default HeaderComponent
