
import { FC } from 'react';
import { useRoutes } from 'react-router-dom';

import LoginPage from '../LoginPage/LoginPage';
import NewUserPage from '../NewUserPage/NewUserPage';
import SignUpPage from '../SignUpPage/SignUpPage';

const SetupRoutes: FC = () => {
	// eslint-disable-next-line
	const routes = useRoutes([
		{ path: '/', element: < NewUserPage /> },
		{ path: '/login', element: < LoginPage /> },
		{ path: '/signup', element: < SignUpPage /> },
		{ path: '*', element: < NewUserPage /> },
	]);
	return routes;


};

export default SetupRoutes;
