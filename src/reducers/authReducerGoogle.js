import { types } from "../types/types";

const initialState = {
    checking: true,
}

export const authReducerGoogle = (state = initialState, action) => {

    switch (action.type) {

        case types.authLoginGoogle:
            return {
                ...state,
                ...action.payload,
                checking: false
            }


        default:
            return state;
    }

}
