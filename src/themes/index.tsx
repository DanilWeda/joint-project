import 'styled-components';

import { ThemeContext } from 'contexts/ThemeContext';
import { FC, ReactNode, useState } from 'react';
import { createGlobalStyle, DarkTheme, LightTheme } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { themeDefault, themeLight } from 'themes/themes';

declare module 'styled-components' {
	export interface DefaultTheme {
		colorWhite: string;
		colorBlack: string;
		colorPrimary: string;
		colorError: string;
		colorCancel: string;
		colorAccept: string;
		colorAcceptLight: string;
		shadow: string;
		btnTransition: string;
	}
}

declare module 'styled-components' {
	export interface LightTheme {
		colorPrimary: string;
		colorSecondary: string;
	}
}

declare module 'styled-components' {
	export interface DarkTheme {
		colorPrimary: string;
		colorSecondary: string;
	}
}

const Global = createGlobalStyle`
*{
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
	font-family: 'Roboto', sans-serif;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
`;

interface IProps {
	children: ReactNode;
}

const CustomThemeProvider: FC<IProps> = ({ children }) => {
	const [theme, setTheme] = useState<DefaultTheme>({ ...themeDefault, ...themeLight });

	const handleTheme = (theme: DefaultTheme | DarkTheme | LightTheme) => {
		setTheme(({ ...themeDefault, ...theme }));
	};

	return (
		<ThemeContext.Provider value={{ theme, handleTheme }}>
			<ThemeProvider theme={theme}>
				<Global />
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export default CustomThemeProvider;