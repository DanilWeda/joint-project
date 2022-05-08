import { Navigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAuth } from '../../hooks/useAuth';
import { resetUser } from '../../store/slices/userSlice';

const TodoPage = () => {
	const { email } = useAuth();
	const dispatch = useAppDispatch();


	const handleLogout = () => {
		dispatch(resetUser());
		<Navigate to={'/'} />;
	};

	return (
		<>
			<div>TodoPage , {email}</div>
			<button onClick={handleLogout}>Logout</button>
		</>
	);
};
export default TodoPage;