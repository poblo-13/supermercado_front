
import { Outlet } from 'react-router';
import Header from './Header';
import MenuInventario from './MenuInventario';
import MenuInferior from './MenuInferior';

function Layout() {
    return (
        <div className="app">
            <Header />

            <MenuInventario />

            <div className="contenido">
                <Outlet />
            </div>

            <MenuInferior />
        </div>
    );
}

export default Layout;
