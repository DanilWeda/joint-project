import React from 'react'

import styled from 'styled-components'

import Btn from '../MainBorder/Btn'
import Logo from '../MainBorder/Logo'
import Title from '../MainBorder/Title'
import MainInput from '../LoginBorder/MainInput'

const StyledMainBorder = styled.div`
  width: 700px;
  height: 460px;
  border: 1px solid ${({ color }) => color || '#000'};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PositionInput = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  width: 360px;
  input:not(:last-child) {
    margin-bottom: 10px;
  }
  a {
    width: 100%;
  }
`

const MainBorderSingUp = () => {
  return (
    <StyledMainBorder>
      <Logo justify={'center'} />
      <Title>TODO APP</Title>
      <PositionInput>
        <MainInput type={'email'} placeholder={'email'} height={'60px'} />
        <MainInput type={'password'} placeholder={'password'} height={'60px'} />
        <Btn height={'60px'} link={'/login'}>
          Sing in
        </Btn>
      </PositionInput>
    </StyledMainBorder>
  )
}

export default MainBorderSingUp
