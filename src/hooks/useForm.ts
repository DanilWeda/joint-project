import { useState } from 'react';

interface IReturn {
	login: string;
	password: string,
	changeLogin: (str: string) => void;
	changePassword: (str: string) => void;
}

export const useForm = (): IReturn => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const changeLogin = (str: string) => {
		setLogin(str);
	};
	const changePassword = (str: string) => {
		setPassword(str);
	};

	return {
		login,
		password,
		changeLogin,
		changePassword,
	};
};
