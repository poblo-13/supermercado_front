# Supermercado del Frente

Proyecto desarrollado para la asignatura **Desarrollo Frontend II**, utilizando React para crear una aplicación web de gestión de inventario de un supermercado.

## Descripción

La aplicación permite consultar los productos disponibles y registrar nuevos artículos en el inventario. Cuenta con distintas páginas para navegar por la información del supermercado.

## Funcionalidades

- Inicio con un catálogo de productos, precios y stock.
- Página con información del supermercado.
- Página con las sucursales y sus horarios de atención.
- Formulario para registrar nuevos artículos.
- Tabla para consultar los productos del inventario.
- Navegación entre páginas sin recargar el sitio.
- Diseño adaptable a computadores y dispositivos móviles.

## Tecnologías utilizadas

- **React:** desarrollo de la interfaz mediante componentes.
- **Vite:** creación y ejecución del proyecto.
- **React Router:** navegación entre páginas.
- **Context API y useState:** gestión del estado del inventario.
- **Tailwind CSS y CSS:** estilos y diseño de la aplicación.
- **JavaScript:** programación de las funcionalidades.

## Instalación y ejecución

Para ejecutar el proyecto es necesario tener instalado Node.js y npm.

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Ejecutar `npm install` para instalar las dependencias.
4. Ejecutar `npm run dev` para iniciar el servidor.
5. Abrir en el navegador la dirección que indique la terminal.

Para comprobar el código se pueden utilizar los comandos `npm run lint` y `npm run build`.

## Gestión del inventario

El inventario utiliza un estado global con Context API, lo que permite compartir los productos entre las páginas.

Los artículos nuevos se mantienen durante la navegación, pero al actualizar el navegador se restablece el inventario inicial, ya que los datos se almacenan temporalmente en memoria.