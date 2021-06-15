
export const getProductById = (id, data) => {


    return data.find(data => data.id === id);

}
