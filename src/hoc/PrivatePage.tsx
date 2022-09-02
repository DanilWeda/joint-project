import { useAuth } from 'hooks/useAuth';
import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface IProps {
	children: ReactNode
}

const PrivatePage: FC<IProps> = ({ children }) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { isAuth } = useAuth();

	return (
		<>
			{
				isAuth ? (
					children
				) : (
					<Navigate to={'/'} />
				)
			}
		</>
	);
};
export default PrivatePage;