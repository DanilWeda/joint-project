import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todosReducer from 'store/slices/todosSlice/todosSlice';
import userReducer from 'store/slices/userSlice/userSlice';


const rootReducer = combineReducers({
	user: userReducer,
	todos: todosReducer,
});

export const setUpStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore['dispatch']
