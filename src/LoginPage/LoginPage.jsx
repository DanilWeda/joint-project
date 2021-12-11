import React, {useState} from 'react'
import styles from './LoginPage.module.css'
import { Route, Routes } from 'react-router-dom'
import MyButton from '../MyButton/MyButton'

const LoginPage = () => {

	const [login, setLogin] = useState('Login')
	const [password, setPassword] = useState('Password')

  return (
    <div className={styles.body}>
      <div className={styles.img}></div>
      <h1 className={styles.title}>Todo App</h1>
      <input type='text' placeholder={login} />
      <input type='text' placeholder={password} />
      <MyButton link='/app'>Log in</MyButton>
    </div>
  );
};

export default LoginPage
