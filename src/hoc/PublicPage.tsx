import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

interface IProps {
	children: ReactNode
}

const PublicPage: FC<IProps> = ({ children }) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { isAuth } = useAuth();
	return (
		<>
			{
				isAuth ? (
					<Navigate to={'/todos'} />
				) : (
					children
				)
			}
		</>
	);
};
export default PublicPage;