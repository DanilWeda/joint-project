import { FC, ReactNode } from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';

export const Global = createGlobalStyle`
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

export const theme = {
	light: {
		bgColor: '#000',
	},
	dark: {
		bgColor: '#fff',
	},
	static: {
		error: '#E11D1D',
	},
};

interface IProps {
	children: ReactNode;
}

const CustomThemeProvider: FC<IProps> = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<Global />
			{children}
		</ThemeProvider>
	);
};

export default CustomThemeProvider;