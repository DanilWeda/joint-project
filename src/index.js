import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

const Global = createGlobalStyle`
*{
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700&family=Roboto:wght@100;300;400;500;700&display=swap');
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	a {
		text-decoration: none;
	}
}
`

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <>
        <Global />
        <App />
      </>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
