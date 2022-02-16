import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { One, Two, LineOne, LineTwo, Container, Logo, Arrow, Header } from './HeaderStyle'
import { Flex, RedBorder } from '../../globalStyles'

const HeaderComponent = () => {
  return (
    <Header>
      <Container>
        <Arrow>
          <AiOutlineArrowLeft />
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
