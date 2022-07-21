
import { FC } from 'react';
import { useRoutes } from 'react-router-dom';

import Private from '../hoc/PrivatePage';
import Public from '../hoc/PublicPage';
import LoginPage from '../screens/LoginPage/LoginPage';
import NewUserPage from '../screens/NewUserPage/NewUserPage';
import NotFoundPage from '../screens/NotFoundPage';
import SignUpPage from '../screens/SignUpPage/SignUpPage';
import TodoPage from '../screens/TodoPage';



export enum paths {
	newUser = '/',
	login = '/login',
	signup = '/signup',
	todos = '/todos',
};

const SetupRoutes: FC = () => {
	// eslint-disable-next-line
	const routes = useRoutes([
		{ path: paths.newUser, element: <Public>< NewUserPage /></Public> },
		{ path: paths.login, element: <Public>< LoginPage /></Public> },
		{ path: paths.signup, element: <Public>< SignUpPage /></Public> },
		{ path: paths.todos, element: <Private>< TodoPage /></Private> },
		{ path: '*', element: < NotFoundPage /> },
	]);
	return routes;
};

export default SetupRoutes;
