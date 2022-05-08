import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '../../models/IUser';



interface userState {
	user: IUser
};
const initialState: userState = {
	user: {
		email: null,
		id: null,
		token: null,
	},
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload;
		},
		resetUser: (state) => {
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
