# Supermercado del Frente

Aplicación web desarrollada con React y Vite para gestionar el inventario de un supermercado. Permite consultar productos, registrar nuevos artículos y administrar un carrito de compras.

## Tecnologías utilizadas

- React + Vite
- JavaScript
- React Router 7
- Context API y useReducer
- Tailwind CSS 4
- CSS responsivo

## Funcionalidades

- Navegación entre Inicio, Nosotros, Tiendas e Inventario.
- Registro de artículos con validaciones y mensajes de error por campo.
- Filtrado de productos por categoría.
- Visualización del detalle de cada producto.
- Carrito de compras con actualización automática del stock.
- Cálculo de cantidades, subtotales y total.
- Modo claro y oscuro con preferencia guardada.
- Diseño adaptable a computadores y dispositivos móviles.

## Instalación y ejecución

Clonar el repositorio e instalar las dependencias:

```bash
git clone https://github.com/poblo-13/supermercado_front.git
cd supermercado_front
npm install
npm run dev
```

Para comprobar el proyecto:

```bash
npm run lint
npm run build
```

## Organización

El proyecto utiliza componentes reutilizables, páginas independientes, un contexto global para compartir los datos y un reducer para administrar el inventario y el carrito.

## Repositorio

https://github.com/poblo-13/supermercado_front

---

**Proyecto académico — Desarrollo Frontend II**