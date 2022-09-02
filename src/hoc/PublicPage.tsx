import { useAuth } from 'hooks/useAuth';
import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { paths } from 'routes/index';

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
					<Navigate to={paths.todos} />
				) : (
					children
				)
			}
		</>
	);
};
export default PublicPage;