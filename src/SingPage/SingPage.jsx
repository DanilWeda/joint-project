import React, { useState } from 'react';
import styles from './SingPage.module.css';
import { Route, Routes } from 'react-router-dom';
import MyButton from '../MyButton/MyButton';

const SingPage = () => {
  const [login, setLogin] = useState('Login');
  const [password, setPassword] = useState('Password');

  return (
    <div className={styles.body}>
      <div className={styles.img}></div>
      <h1 className={styles.title}>Todo App</h1>
      <input type='text' placeholder={login} />
      <input type='text' placeholder={password} />
      <MyButton link='/app'>Sing In</MyButton>
    </div>
  );
};

export default SingPage;
