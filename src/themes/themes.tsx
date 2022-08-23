import { DarkTheme, DefaultTheme, LightTheme } from 'styled-components';

export const themeDefault: DefaultTheme = {
	colorWhite: '#fff',
	colorBlack: '#000',
	colorPrimary: '#ccc',
	colorError: '#E11D1D',
	colorCancel: '#EAA3A3',
	colorAccept: '#A8EAA7',
	colorAcceptLight: '#b4e6b3',
	shadow: '0px 4px 4px 0px #00000040',
	btnTransition: 'all .5s cubic-bezier(0.165, 0.84, 0.44, 1)',

};

export const themeLight: LightTheme = {
	colorPrimary: '#C9EEFF',
	colorSecondary: '#000',
};

export const themeDark: DarkTheme = {
	colorPrimary: '#000',
	colorSecondary: '#000',
};