
import ProductoCard from './ProductoCard';

function ProductosLista({ articulos }) {
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
