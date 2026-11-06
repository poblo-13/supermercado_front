
export function inventarioReducer(estado, accion) {
    switch (accion.type) {

        case 'AGREGAR_ARTICULO':
            return {
                ...estado,
                articulos: [...estado.articulos, accion.articulo]
            };

        case 'AGREGAR_AL_CARRITO': {
            const articulo = estado.articulos.find(
                (item) => item.id === accion.id
            );

            if (!articulo || articulo.stock <= 0) {
                return estado;
            }

            const existeEnCarrito = estado.carrito.some(
                (item) => item.id === articulo.id
            );

            return {
                ...estado,

                articulos: estado.articulos.map((item) =>
                    item.id === articulo.id
                        ? { ...item, stock: item.stock - 1 }
                        : item
                ),

                carrito: existeEnCarrito
                    ? estado.carrito.map((item) =>
                        item.id === articulo.id
                            ? { ...item, cantidad: item.cantidad + 1 }
                            : item
                    )
                    : [
                        ...estado.carrito,
                        { id: articulo.id, cantidad: 1 }
                    ]
            };
        }

        case 'DISMINUIR_DEL_CARRITO': {
            const itemCarrito = estado.carrito.find(
                (item) => item.id === accion.id
            );

            if (!itemCarrito) {
                return estado;
            }

            return {
                ...estado,

                articulos: estado.articulos.map((item) =>
                    item.id === accion.id
                        ? { ...item, stock: item.stock + 1 }
                        : item
                ),

                carrito: itemCarrito.cantidad === 1
                    ? estado.carrito.filter(
                        (item) => item.id !== accion.id
                    )
                    : estado.carrito.map((item) =>
                        item.id === accion.id
                            ? { ...item, cantidad: item.cantidad - 1 }
                            : item
                    )
            };
        }

        default:
            return estado;
    }
}
