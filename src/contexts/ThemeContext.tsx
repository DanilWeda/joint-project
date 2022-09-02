import { createContext, useContext } from 'react';
import { DarkTheme, DefaultTheme, LightTheme } from 'styled-components';

interface IThemeContext {
	theme: DefaultTheme | DarkTheme | LightTheme;
	handleTheme(): void;
}

export const ThemeContext: any = createContext({});
export const useThemeContext = () => useContext<IThemeContext>(ThemeContext);