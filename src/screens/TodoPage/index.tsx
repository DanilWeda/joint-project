// import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import Loader from 'components/Loader';
import Task from 'components/Task';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAuth } from 'hooks/useAuth';
import { ITodo } from 'models/ITodo';
import { useCallback, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { ReactComponent as Logout } from 'static/img/logout.svg';
import { ReactComponent as Plus } from 'static/img/plus.svg';
import { createTodo, getTodos, updateTodo } from 'store/slices/todosSlice/action';
import { resetUser } from 'store/slices/userSlice/userSlice';

import { AddButton, BtnWrapper, Header, LogoutButtom, Title, TodoWrapper, UserName, Wrapper } from './StyledTodoPage';


const TodoPage = () => {
	const { email } = useAuth();
	const dispatch = useAppDispatch();
	const { todos, loading } = useAppSelector(state => state.todos);
	const [reload, setReload] = useState<boolean>(false);
	const { id } = useAuth();
	const [newTodo, setNewTodo] = useState<Omit<ITodo, 'uid'>>({ text: '', completed: false, id: '' });

	// eslint-disable-next-line
	const handleCreateTodo = useCallback(
		async (todo: ITodo) => {
			await dispatch(createTodo(todo));
			setReload(true);

			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [newTodo]);

	useEffect(() => {
		dispatch(getTodos(id!));
		// eslint-disable-next-line
	}, [reload]);

	useEffect(() => {
		dispatch(updateTodo({ ...newTodo, uid: id }));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [newTodo.text, newTodo.completed]);

	const handleLogout = () => {
		dispatch(resetUser());
		<Navigate to={'/'} />;
	};

	const handleOnChange = (todo: Omit<ITodo, 'uid'>) => {
		setNewTodo(todo);
	};

	return (
		<Wrapper>
			{loading && <Loader />}
			<Header>
				<UserName> {email}</UserName>
				<LogoutButtom onClick={handleLogout}><Logout /></LogoutButtom>
			</Header>
			<Title>
				CURRENT TASKS
			</Title>
			<BtnWrapper>
				<AddButton onClick={() => null}><Plus /></AddButton>
			</BtnWrapper>
			<TodoWrapper>
				{!loading && !todos.length && <Title>Click on plus - create new task!</Title>}
				{!loading &&
					todos?.map(todo => <Task key={todo.id} id={todo.id!} completed={todo.completed} value={todo.text} onChange={handleOnChange} />)
				}
			</TodoWrapper>
		</Wrapper>
	);
};
export default TodoPage;