import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from 'firebase';
import { collection, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { ITodo } from 'models/ITodo';



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
			const { id, completed, text } = todo;
			const updateTodoRef = doc(db, 'todos', id!);
			await updateDoc(updateTodoRef, { text, completed });
		} catch (error) {
			return thunkApi.rejectWithValue('Faileture');
		}
	},
);

export const getTodos = createAsyncThunk(
	'todo/getAll',
	async (uid: string, thunkApi) => {
		console.log(uid);
		try {
			const docSnap = await getDocs(collection(db, 'todos'));
			const data: ITodo[] = [];
			docSnap.forEach(doc => {
				console.log(doc);
				// @ts-ignore
				doc.data() && doc.data().uid === uid && data.push({ ...doc.data(), id: doc.id });
			});
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	},
);