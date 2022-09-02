import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'models/IUser';

import { loginOrCreateUser } from './action';


interface userState {
	user: IUser
	loading: boolean;
	error: boolean;
};

const user = window.localStorage.getItem('user');
const validUser: IUser = user && JSON.parse(user);

const initialState: userState = {
	user: {
		email: validUser?.email || null,
		id: validUser?.id || null,
		token: validUser?.token || null,
	},
	loading: false,
	error: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		resetUser: (state) => {
			const resetUserObj: IUser = {
				email: null,
				id: null,
				token: null,
			};
			state.user = resetUserObj;
		},
	},
	extraReducers: {
		[loginOrCreateUser.pending.type]: (state) => {
			state.error = false;
			state.loading = true;
		},
		[loginOrCreateUser.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
			state.user.email = action.payload.email;
			state.user.id = action.payload.id;
			state.user.token = action.payload.token;
			state.loading = false;
		},
		[loginOrCreateUser.rejected.type]: (state) => {
			state.loading = false;
			state.error = true;
		},
	},
});


export const { resetUser } = userSlice.actions;
export default userSlice.reducer;
