import AddOrEditPopup from 'components/AddOrEditPopup';
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
import { createTodo, deleteTodo, getTodos, updateTodo } from 'store/slices/todosSlice/action';
import { resetUser } from 'store/slices/userSlice/userSlice';

import { AddButton, BtnWrapper, Header, LogoutButtom, Title, TodoWrapper, UserName, Wrapper } from './StyledTodoPage';


const TodoPage = () => {
	const { email } = useAuth();
	const dispatch = useAppDispatch();
	const { todos, loading } = useAppSelector(state => state.todos);
	const [reload, setReload] = useState<boolean>(false);
	const { id } = useAuth();
	const [newTodo, setNewTodo] = useState<Omit<ITodo, 'id'>>({ text: '', completed: false, uid: id });
	const [openPopup, setOpenPopup] = useState(false);

	// eslint-disable-next-line
	const handleCreateTodo = useCallback(
		async () => {
			if (newTodo.text) {
				await dispatch(createTodo(newTodo));
				setReload(!reload);
			}
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [newTodo]);

	useEffect(() => {
		dispatch(getTodos(id!));
		// eslint-disable-next-line
	}, [reload]);

	const handleLogout = () => {
		dispatch(resetUser());
		window.localStorage.clear();
		<Navigate to={'/'} />;
	};

	const handleOnChange = (text: string) => {
		if (id) {
			setNewTodo({
				text,
				completed: false,
				uid: id,
			});
		}
	};

	const handleOnEdit = async (todo: Omit<ITodo, 'uid'>) => {
		await dispatch(updateTodo({ ...todo, uid: id }));
		setReload(!reload);
	};

	const onSwitchCompleted = async (id: string, status: boolean) => {
		const todo = todos.find(todo => todo.id === id);
		if (todo) await dispatch(updateTodo({ ...todo, completed: status }));
	};

	const onRemoveTask = (id: string) => async (hide?: boolean) => {
		if (hide) window.localStorage.setItem('hideremove', JSON.stringify(true));
		await dispatch(deleteTodo(id));
		setReload(!reload);
	};

	const handleOpenPopup = () => {
		setOpenPopup(true);
	};

	const handleClosePopup = () => {
		setOpenPopup(false);
	};


	return (
		<Wrapper>
			<AddOrEditPopup onChange={handleOnChange} onCreate={handleCreateTodo} open={openPopup} onClose={handleClosePopup}>
				<Title>
					CURRENT TASKS
				</Title>
			</AddOrEditPopup>
			{loading && <Loader />}
			<Header>
				<UserName> {email}</UserName>
				<LogoutButtom onClick={handleLogout}><Logout /></LogoutButtom>
			</Header>
			<Title>
				CURRENT TASKS
			</Title>
			<BtnWrapper>
				<AddButton onClick={handleOpenPopup}><Plus /></AddButton>
			</BtnWrapper>
			<TodoWrapper>
				{!loading && !todos.length && <Title>Click on plus - create new task!</Title>}
				{!loading &&
					todos?.map(todo =>
						<Task
							key={todo.id}
							id={todo.id!}
							completedSwitcher={onSwitchCompleted}
							completed={todo.completed}
							value={todo.text}
							onEdit={handleOnEdit}
							onRemove={onRemoveTask}
						/>,
					)
				}
			</TodoWrapper>
		</Wrapper>
	);
};
export default TodoPage;