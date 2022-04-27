import { createSlice } from '@reduxjs/toolkit';

import { IUser } from '../../models/IUser';



interface userState {
	users: IUser[]
};
const initialState: userState = {
	users: [],
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {

	},
});

export default userSlice.reducer;
