import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import App from './screens';
import { setUpStore } from './store/index';

const Global = createGlobalStyle`
*{
	@import url(
		'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700&family=Roboto:wght@100;300;400;500;700&display=swap');
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	a {
		text-decoration: none;
	}
}
`;

const store = setUpStore();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<>
					<Global />
					<App />
				</>,
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
