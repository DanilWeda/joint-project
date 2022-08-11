import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { IUser } from 'models/IUser';

export const loginOrCreateUser = createAsyncThunk(
	'user/loginOrCreate',
	async (user: { uEmail: string, uPassword: string, isNewUser: boolean }, thunkApi) => {
		const auth = getAuth();
		const { uEmail, uPassword, isNewUser } = user;
		try {
			const { user } = isNewUser
				? await createUserWithEmailAndPassword(auth, uEmail, uPassword)
				: await signInWithEmailAndPassword(auth, uEmail, uPassword);

			// @ts-ignore
			const { email, uid, accessToken } = user;

			const tmpUser: IUser = {
				email,
				id: uid,
				token: accessToken,
			};

			window.localStorage.setItem('user', JSON.stringify(tmpUser));

			return tmpUser;

		} catch (error) {
			return thunkApi.rejectWithValue('Faileture login');
		}
	},
);

// export const updateTodo = createAsyncThunk(
// 	'todo/update',
// 	async (todo: ITodo, thunkApi) => {
// 		try {
// 			const { id, completed, text } = todo;
// 			const updateTodoRef = doc(db, 'todos', id!);
// 			await updateDoc(updateTodoRef, { text, completed });
// 		} catch (error) {
// 			return thunkApi.rejectWithValue('Faileture');
// 		}
// 	},
// );

// export const getTodos = createAsyncThunk(
// 	'todo/getAll',
// 	async (uid: string, thunkApi) => {
// 		console.log(uid);
// 		try {
// 			const docSnap = await getDocs(collection(db, 'todos'));
// 			const data: ITodo[] = [];
// 			docSnap.forEach(doc => {
// 				console.log(doc);
// 				// @ts-ignore
// 				doc.data() && doc.data().uid === uid && data.push({ ...doc.data(), id: doc.id });
// 			});
// 			return data;
// 		} catch (error) {
// 			return thunkApi.rejectWithValue(error);
// 		}
// 	},
// );