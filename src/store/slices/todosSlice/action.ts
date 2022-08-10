import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';

import { db } from '../../../firebase';
import { ITodo } from '../../../models/ITodo';



export const createTodo = createAsyncThunk(
	'todo/create',
	async (todo: ITodo, thunkApi) => {
		try {
			const userTodosRef = collection(db, 'todos');
			await setDoc(doc(userTodosRef), todo);
		} catch (error) {
			return thunkApi.rejectWithValue('Faileture');
		}
	},
);

export const updateTodo = createAsyncThunk(
	'todo/update',
	async (todo: ITodo, thunkApi) => {
		try {
			const { id, uid, completed, text } = todo;
			const updateTodoRef = doc(db, 'todos', id!);
			await setDoc(updateTodoRef, { text, completed, uid });
		} catch (error) {
			return thunkApi.rejectWithValue('Faileture');
		}
	},
);

export const getTodos = createAsyncThunk(
	'todo/getAll',
	async (uid: string, thunkApi) => {
		try {
			const docSnap = await getDocs(collection(db, 'todos'));
			const data: ITodo[] = [];
			// @ts-ignore
			docSnap.forEach(doc => doc.data() && doc.data().uid === uid && data.push({ ...doc.data(), id: doc.id }));
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	},
);