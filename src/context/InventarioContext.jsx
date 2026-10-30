import { useState } from 'react';
import { productos } from '../data/productos';
import { InventarioContext } from './ContextoInventario';

export function InventarioProvider({ children }) {
    const [articulos, setArticulos] = useState(productos);

    const agregarArticulo = (nuevoArticulo) => {
        setArticulos((anteriores) => [
            ...anteriores,
            {
                ...nuevoArticulo,
                id: crypto.randomUUID()
            }
        ]);
    };

    return (
        <InventarioContext.Provider
            value={{ articulos, agregarArticulo }}
        >
            {children}
        </InventarioContext.Provider>
    );
}
