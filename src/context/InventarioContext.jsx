
import { useReducer } from 'react';
import { productos } from '../data/productos';
import { InventarioContext } from './ContextoInventario';
import { inventarioReducer } from './inventarioReducer';

const estadoInicial = {
    articulos: productos,
    carrito: []
};

export function InventarioProvider({ children }) {
    const [estado, dispatch] = useReducer(
        inventarioReducer,
        estadoInicial
    );

    const agregarArticulo = (nuevoArticulo) => {
        dispatch({
            type: 'AGREGAR_ARTICULO',
            articulo: {
                ...nuevoArticulo,
                id: crypto.randomUUID()
            }
        });
    };

    const agregarAlCarrito = (id) => {
        dispatch({
            type: 'AGREGAR_AL_CARRITO',
            id
        });
    };

    const disminuirDelCarrito = (id) => {
        dispatch({
            type: 'DISMINUIR_DEL_CARRITO',
            id
        });
    };

    return (
        <InventarioContext.Provider
            value={{
                articulos: estado.articulos,
                carrito: estado.carrito,
                agregarArticulo,
                agregarAlCarrito,
                disminuirDelCarrito
            }}
        >
            {children}
        </InventarioContext.Provider>
    );
}
