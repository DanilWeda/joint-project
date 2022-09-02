import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo } from 'models/ITodo';

import { createTodo, getTodos } from './action';

interface ITodoState {
	todos: ITodo[];
	loading: boolean;
	error: any;
};

const initialState: ITodoState = {
	todos: [],
	loading: false,
	error: null,
};

const todosSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {},
	extraReducers: {
		[createTodo.pending.type]: (state) => {
			state.loading = true;
		},
		[createTodo.fulfilled.type]: (state, action: PayloadAction<ITodo>) => {
			state.loading = false;
		},
		[createTodo.rejected.type]: (state, action: PayloadAction<any>) => {
			state.loading = false;
			state.error = action.payload;
		},
		[getTodos.pending.type]: (state) => {
			state.loading = true;
		},
		[getTodos.fulfilled.type]: (state, action: PayloadAction<ITodo[]>) => {
			state.loading = false;
			state.todos = action.payload;
		},
		[getTodos.rejected.type]: (state, action: PayloadAction<any>) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});


// export const { } = todoSlice.actions;
export default todosSlice.reducer;
