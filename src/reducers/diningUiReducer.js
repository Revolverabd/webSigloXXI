import { types } from "../types/types";

const initialState = {
    tables: []
};


export const diningUiReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.diningUiLoaded:
            return {
                ...state,
                tables: [...action.payload]
            }

        case types.changeState:

            return {
                ...state,
                tables: [...action.payload]
            }


        default:
            return state;
    }

}
