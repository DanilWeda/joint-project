import React from 'react'

import styled from 'styled-components'

import Btn from '../UI/MainBtn'
import Logo from '../UI/MainLogo'
import Title from '../UI/MainTitle'

const StyledMainBorder = styled.div`
  width: 700px;
  height: 300px;
  border: 1px solid ${({ color }) => color || '#000'};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PositionBtn = styled.div`
  margin-top: 60px;
  display: flex;
  a:not(:last-child) {
    margin-right: 40px;
  }
`

const MainBorder = () => {
  return (
    <StyledMainBorder>
      <Logo justify={'center'} />
      <Title>TODO APP</Title>
      <PositionBtn>
        <Btn width={'200px'} height={'60px'} link={'/login'}>
          Log In
        </Btn>
        <Btn width={'200px'} height={'60px'} link={'/singup'}>
          Sing Up
        </Btn>
      </PositionBtn>
    </StyledMainBorder>
  )
}

export default MainBorder
