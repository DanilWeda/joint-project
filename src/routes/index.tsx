
import { FC } from 'react';
import { useRoutes } from 'react-router-dom';

import Private from '../hoc/PrivatePage';
import Public from '../hoc/PublicPage';
import LoginPage from '../screens/LoginPage/LoginPage';
import NewUserPage from '../screens/NewUserPage/NewUserPage';
import NotFoundPage from '../screens/NotFoundPage';
import SignUpPage from '../screens/SignUpPage/SignUpPage';
import TodoPage from '../screens/TodoPage';

const SetupRoutes: FC = () => {
	// eslint-disable-next-line
	const routes = useRoutes([
		{ path: '/', element: <Public>< NewUserPage /></Public> },
		{ path: '/login', element: <Public>< LoginPage /></Public> },
		{ path: '/signup', element: <Public>< SignUpPage /></Public> },
		{ path: '/todos', element: <Private>< TodoPage /></Private> },
		{ path: '*', element: < NotFoundPage /> },
	]);
	return routes;


};

export default SetupRoutes;
