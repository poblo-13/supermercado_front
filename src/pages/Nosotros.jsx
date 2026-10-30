
import { informacionNosotros } from '../data/nosotros';
import NosotrosCard from '../components/NosotrosCard';

function Nosotros() {
    return (
        <main className="nosotros">

            <section className="nosotros-intro">
                <h1>¿Quiénes somos?</h1>
                <p>
                    Bienvenido a Supermercado del Frente, un supermercado
                    dedicado a ofrecer productos de calidad, variedad y
                    precios accesibles para nuestros clientes.
                </p>
            </section>

            <section className="nosotros-grid">
                {informacionNosotros.map((informacion) => (
                    <NosotrosCard
                        key={informacion.id}
                        informacion={informacion}
                    />
                ))}
            </section>

        </main>
    );
}

export default Nosotros;
