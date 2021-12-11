import React from 'react'
import styles from './NewPage.module.css'
import { Route, Routes } from 'react-router-dom'
import MyButton from '../MyButton/MyButton'
import LoginPage from '../LoginPage/LoginPage'

const NewPage = () => {
	
	
	return (
    <div className={styles.body}>
      <div className={styles.img}></div>
      <h1 className={styles.title}>Todo App</h1>
      <MyButton link='/login'>Log in</MyButton>
      <MyButton link='/singin'>Sing in</MyButton>
    </div>
  );
}

export default NewPage
