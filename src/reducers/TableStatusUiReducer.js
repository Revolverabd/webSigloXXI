import { types } from "../types/types";

const initialState = {
    orders: []
};


export const TableStatusUiReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.TableStatusUiLoaded:
            return {
                ...state,
                orders: [...action.payload]
            }

        case types.changeStateOrders:

            return {
                ...state,
                orders: [...action.payload]
            }


        default:
            return state;
    }

}