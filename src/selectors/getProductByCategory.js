
export const getProductByCategory = (category, data) => {


    const validateCategory = ['PLATOS DE LA CASA', 'BEBESTIBLES', 'CARNES', 'POSTRES', 'PASTAS'];

    if (!validateCategory.includes(category)){
        throw new Error('categoria no es correcta');
    }

    return data.filter(data => data.Categoria === category);

}
