import { configureStore } from '@reduxjs/toolkit';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';

export const store = configureStore({
	reducer: {cashReducer, customerReducer},
	devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;