import { types } from "../types/types";

const initialState = {
    tables: []
    // active: [{
    //     btn1: { state: true, css: "boton-state-active" },
    //     btn2: { state: false, css: "boton-state-deactive" },
    //     btn3: { state: false, css: "boton-state-deactive" },
    //     btn4: { state: false, css: "boton-state-deactive" }
    // }]
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
