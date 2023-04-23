import { AnyAction } from '@reduxjs/toolkit';

const ADD_CASH = 'ADD_CASH';
const GET_CASH = 'GET_CASH';

export interface cashStateType {
	cash: number;
}

const initialState: cashStateType = {
	cash: 0,
};

export const cashReducer = (state: cashStateType = initialState, action: AnyAction) => {
	switch (action.type) {
		case ADD_CASH:
			return {...state, cash: state.cash + action.payload};
		case GET_CASH:
			return {...state, cash: state.cash - action.payload};

		default:
			return state;
	}

};

export const addCashAction = (payload: number | null) => ({ type: ADD_CASH, payload});
export const getCashAction = (payload: number | null) => ({ type: GET_CASH, payload});
