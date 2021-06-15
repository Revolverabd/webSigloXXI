import { types } from "../types/types";

const initialState = {
    products: [],
    activeEvent: null
};

export const clientUiReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.clientUiLoaded:
            return {
                ...state,
                products: [...action.payload]
            }


        default:
            return state;
    }

}
