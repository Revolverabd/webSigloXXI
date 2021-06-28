import { types } from "../types/types";

const initialState = {
    modalPay: false,
    modalPedido: false,
    modalViewPedido: false,
    products: [],
    pedido: [{ id: "1", numMesa: 0, pedidoMesa: "NO ASIGNADO", total: 0, estado: 10, nombreEmpleado: "ANONIMO", estadoCocina: "NO ASIGNADO" }],
    listProduct: []
};

export const clientUiReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.clientUiLoaded:
            return {
                ...state,
                products: [...action.payload]
            }

        case types.clientUiPedidoLoaded:
            return {
                ...state,
                pedido: [...action.payload]
            }

        case types.establecePedidoLoaded:
            return {
                ...state,
                pedido: [...action.payload]
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

        case types.uiOpenModal:
            return {
                ...state,
                modalPay: true
            }

        case types.uiCloseModal:
            return {
                ...state,
                modalPay: false
            }

        case types.uiOpenModalPedido:
            return {
                ...state,
                modalPedido: true
            }

        case types.uiCloseModalPedido:
            return {
                ...state,
                modalPedido: false
            }

        case types.uiOpenViewPedido:
            return {
                ...state,
                modalViewPedido: true
            }


        case types.uiCloseViewPedido:
            return {
                ...state,
                modalViewPedido: false
            }

        case types.sendPedido:
            return {
                ...state,
                listProduct: action.payload
            }


        default:
            return state;
    }

}
