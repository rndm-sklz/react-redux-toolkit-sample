import { AnyAction } from '@reduxjs/toolkit';

export const ADD_CUSTOMER = 'ADD_CUSTOMER' as const;
export const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER' as const;

export type customerStateType = {
	customers: customerType[];
}

export type customerType = {
	name?: string | null;
	id: number;
}

const customerInitialState: customerStateType = {
	customers: [],
};

export const customerReducer = (state: customerStateType = customerInitialState, action: AnyAction) => {
	switch (action.type) {
		case ADD_CUSTOMER:
			return {...state, customers: [...state.customers, action.payload]};
		case REMOVE_CUSTOMER:
			return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)};

		default:
			return state;
	}
};

export const addCustomerAction = (payload: customerType) => ({ type: ADD_CUSTOMER, payload});
export const removeCustomerAction = (payload: number) => ({ type: REMOVE_CUSTOMER, payload: payload});
