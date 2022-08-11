import 'firebase';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'screens';
import { setUpStore } from 'store/index';
import CustomThemeProvider from 'theme';

const store = setUpStore();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<CustomThemeProvider>
					<App />
				</CustomThemeProvider>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
