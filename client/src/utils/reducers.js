import {
    UPDATE_PRODUCTS
} from "./actions";
import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products]
            };
        default: 
            return state;
    }
}

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}