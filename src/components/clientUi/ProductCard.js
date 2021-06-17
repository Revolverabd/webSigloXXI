import { useDispatch } from 'react-redux';
import { addPrecheckout } from '../../actions/clientUiAction';

import './clientUiStyle.css';

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

    const dispatch = useDispatch();

    const product = {
        id: Id,
        name: Nombre,
        precio: PrecioNeto
    }

    // let product = JSON.parse(localStorage.getItem('listProduct')) || [];    

    const handleClickAdd = (e) => {

        e.preventDefault();

        dispatch(addPrecheckout(product));
    }

    return (



        <div class="card">
            <img class="card-image" src={NombreImagen} alt="image" />
            <div class="card-text" >
                <h2>{Nombre}</h2>
                <p>{Descripcion}</p>
            </div>
            <button
                class="boton btn"
                type="submit"
                onClick={handleClickAdd}

            >
                Agregar
            </button>
        </div>

    )
}
