import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'models/IUser';


interface userState {
	user: IUser
};

const user = window.localStorage.getItem('user');
const validUser: IUser = user && JSON.parse(user);

const initialState: userState = {
	user: {
		email: validUser?.email || null,
		id: validUser?.id || null,
		token: validUser?.token || null,
	},
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<IUser>) => {
			window.localStorage.setItem('user', JSON.stringify(action.payload));
			state.user = action.payload;
		},
		resetUser: (state) => {
			window.localStorage.clear();
			const resetUserObj: IUser = {
				email: null,
				id: null,
				token: null,
			};
			state.user = resetUserObj;
		},
	},
});


export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
