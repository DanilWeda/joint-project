import { useAppSelector } from './useAppSelector';

export const useAuth = () => {
	const { email, id, token } = useAppSelector(state => state.user.user);

	return {
		isAuth: !!token,
		email,
		token,
		id,
	};
};