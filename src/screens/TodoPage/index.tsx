import { Navigate } from 'react-router-dom';

import Task from '../../components/Task';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAuth } from '../../hooks/useAuth';
import { ReactComponent as Logout } from '../../static/img/logout.svg';
import { ReactComponent as Plus } from '../../static/img/plus.svg';
import { resetUser } from '../../store/slices/userSlice';
import { AddButton, BtnWrapper, Header, LogoutButtom, Title, TodoWrapper, UserName, Wrapper } from './StyledTodoPage';;

const TodoPage = () => {
	const { email } = useAuth();
	const dispatch = useAppDispatch();


	const handleLogout = () => {
		dispatch(resetUser());
		<Navigate to={'/'} />;
	};

	return (
		<Wrapper>
			<Header>
				<UserName> {email}</UserName>
				<LogoutButtom onClick={handleLogout}><Logout /></LogoutButtom>
			</Header>
			<Title>
				CURRENT TASKS
			</Title>
			<BtnWrapper>
				<AddButton onClick={() => console.log('1')}><Plus /></AddButton>
			</BtnWrapper>
			<TodoWrapper>
				<Task />
			</TodoWrapper>
		</Wrapper>
	);
};
export default TodoPage;