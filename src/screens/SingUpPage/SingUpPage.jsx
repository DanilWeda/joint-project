import React, { useState } from 'react'
import styles from './SingUpPage.module.css'
import { Route, Routes } from 'react-router-dom'
import MainBorderSingUp from '../../components/Styled/SingUpBorder/MainBorderSingUp'

const SignPage = () => {
  const [login, setLogin] = useState('Login')
  const [password, setPassword] = useState('Password')

  return <MainBorderSingUp />
}

export default SignPage
