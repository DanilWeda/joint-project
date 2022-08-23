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
