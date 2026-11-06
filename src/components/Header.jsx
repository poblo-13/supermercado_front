
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

function Header() {
    const [tema, setTema] = useState(() =>
        localStorage.getItem('tema-supermercado') === 'oscuro'
            ? 'oscuro'
            : 'claro'
    );

    useEffect(() => {
        document.documentElement.setAttribute('data-tema', tema);
        localStorage.setItem('tema-supermercado', tema);
    }, [tema]);

    const cambiarTema = () => {
        setTema((anterior) =>
            anterior === 'claro' ? 'oscuro' : 'claro'
        );
    };

    return (
        <header className="encabezado">
            <div className="encabezado-contenido">
                <div>
                    <strong>
                        <Link to="/">
                            Supermercado del Frente
                        </Link>
                    </strong>

                    <p>Sistema de gestión de inventario</p>
                </div>

                <button
                    type="button"
                    className="boton-tema"
                    onClick={cambiarTema}
                >
                    {tema === 'oscuro'
                        ? 'Activar modo claro'
                        : 'Activar modo noche'}
                </button>
            </div>
        </header>
    );
}

export default Header;
