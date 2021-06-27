

const calculaTotalPedido = (listProduct) => {

    let total = 0;
    listProduct.forEach(product => {
        total += product.subTotal;
    });

    return total;
}

const calculaTotalBoleta = () => {

}



export {
    calculaTotalPedido,
    calculaTotalBoleta
}