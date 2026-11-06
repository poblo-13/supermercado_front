
import ProductoCard from './ProductoCard';

function ProductosLista({ articulos }) {
    if (articulos.length === 0) {
        return (
            <p
                className="rounded-xl border border-[#E4EEF0] bg-[#E4EEF0] p-5 text-[#075056]"
                role="status"
            >
                Todavía no hay productos registrados en nuestro supermercado.
            </p>
        );
    }

    return (
        <div className="productos-grid">
            {articulos.map((producto) => (
                <ProductoCard
                    key={producto.id}
                    producto={producto}
                />
            ))}
        </div>
    );
}

export default ProductosLista;
