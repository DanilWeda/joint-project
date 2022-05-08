import './firebase';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import App from './screens';
import { setUpStore } from './store/index';

const Global = createGlobalStyle`
*{
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
	font-family: 'Roboto', sans-serif;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	a {
		text-decoration: none;
		color: #000;
		width: 100%;
	}
}
`;

const store = setUpStore();

const theme = {
	light: {
		bgColor: '#000',
	},
	dark: {
		bgColor: '#fff',
	},
};

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<ThemeProvider theme={theme}>
					<Global />
					<App />
				</ThemeProvider>,
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
