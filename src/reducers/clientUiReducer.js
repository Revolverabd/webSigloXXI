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

            const todos = [...state.listProduct, action.payload];
            return {
                ...state,
                listProduct: todos
            }

        case types.clientDeleteProduct:

            const productDel = state.listProduct.filter(listProduct => listProduct.id !== action.payload);
            return {
                ...state,
                listProduct: productDel
            }

        case types.increaseByOneProduct:
            return {
                ...state,
                listProduct: [...action.payload]
            }

        case types.decreaseByOneProduct:
            return {
                ...state,
                listProduct: [...action.payload]
            }

        case types.oneResetProduct:
            return {
                ...state,
                listProduct: [...action.payload]
            }


        default:
            return state;
    }

}
