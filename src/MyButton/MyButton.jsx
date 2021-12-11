import React from 'react'
import styles from './MyButton.module.css'
import { Route, Link } from 'react-router-dom'

function MyButton(props) {

	console.log(props)
	return (
    <div>
        <Link to={`${props.link}`}>{props.children}</Link>
    </div>
  );
}

export default MyButton
