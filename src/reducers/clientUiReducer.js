import { types } from "../types/types";

const initialState = {
    products: [],
    listProduct: []
};

export const clientUiReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.clientUiLoaded:
            return {
                ...state,
                products: [...action.payload]
            }

        case types.clientAddProduct:

            const todos = [...state.listProduct,   action.payload]
            return {
                ...state,
                listProduct: todos
            }

        default:
            return state;
    }

}
