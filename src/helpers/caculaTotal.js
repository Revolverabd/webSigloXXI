

const calculaTotalPedido = (listProduct) => {

    let total = 0;
    listProduct.forEach(product => {
        total += product.subTotal;
    });

    return total;
}

const calculaTotalBoleta = (pedido) => {
    let total = 0;
    pedido.forEach(element => {
        total += element.total;
    });

    return total;
}



export {
    calculaTotalPedido,
    calculaTotalBoleta
}