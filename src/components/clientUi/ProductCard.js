import { useDispatch, useSelector } from 'react-redux';
import { addPrecheckout } from '../../actions/clientUiAction';

import Swal from 'sweetalert2';

export const ProductCard = ({
    Id,
    Nombre,
    Descripcion,
    PrecioNeto,
    Estado,
    Categoria,
    IdImagen,
    NombreImagen

}) => {

    const { listProduct } = useSelector(state => state.clientUi);

    const dispatch = useDispatch();

    const product = {
        id: Id,
        name: Nombre,
        precio: PrecioNeto,
        subTotal: Number.parseInt(PrecioNeto),
        counter: 1
    }

    const handleClickAdd = (e) => {

        e.preventDefault();

        let [data = 0] = listProduct.filter(data => data.id === Id);

        if (data.id !== (Id)) {
            dispatch(addPrecheckout(product));
        }else{
            Swal.fire('Ups!', 'Ya se encuentra en la lista de productos','info');
        }
    }

    return (

        <div className="card">
            <img className="card-image" src={NombreImagen} alt=""/>
            <div className="card-text" >
                <h2>{Nombre}</h2>
                <p>{Descripcion}</p>
            </div>
            <button
                className="boton btn"
                type="submit"
                onClick={handleClickAdd}
            >
                Agregar
            </button>
        </div>
    )
}
