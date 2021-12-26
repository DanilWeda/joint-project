import React, { useState, useRef, useEffect } from 'react';
import styles from './LoginPage.module.css';
import { Route, Routes } from 'react-router-dom';
import MyButton from '../../MyButton/MyButton';
import Todo from '../../components/Todo/Todo';

const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };


  return (
    <div className={styles.body}>
      <div className={styles.img}></div>
      <h1 className={styles.title}>Todo App</h1>
      <h1>{login}</h1>
      <input
        ref={ref}
        onChange={handleLoginChange}
        value={login}
        type='text'
        placeholder='Login'
      />
      <input type='text' placeholder={password} />
      <MyButton link='/app'>Log in</MyButton>
		<Todo/>
    </div>
  );
};

export default LoginPage;
