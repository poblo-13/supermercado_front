
import { Link } from 'react-router-dom';

function NoEncontrada() {
    return (
        <main className="pagina-error">
            <div className="mx-auto max-w-xl rounded-2xl bg-[#E4EEF0] p-8 text-center">

                <h1 className="text-5xl font-bold text-[#FF5B04]">
                    Error 404
                </h1>

                <h2 className="mb-4 text-2xl font-semibold text-[#16232A]">
                    Página no encontrada
                </h2>

                <p className="mb-6 text-[#075056]">
                    Lo sentimos, la página que buscas
                    no existe en nuestro supermercado.
                </p>

                <Link
                    to="/"
                    className="inline-block rounded-lg bg-[#FF5B04] px-6 py-3 font-semibold text-white no-underline transition-colors hover:bg-[#E65303]"
                >
                    Volver al Inicio
                </Link>

            </div>
        </main>
    );
}

export default NoEncontrada;
