
export function validarArticulo(formulario) {
    const errores = {};

    const nombre = formulario.nombre.trim();
    const marca = formulario.marca.trim();
    const tipo = formulario.tipo.trim();

    const patronTexto = /^(?=.*[\p{L}\p{N}])[-\p{L}\p{N}\s.,'()/%&+]+$/u;
    const patronEntero = /^\d+$/;

    // Validar nombre
    if (nombre.length < 3 || nombre.length > 60) {
        errores.nombre = 'El nombre debe tener entre 3 y 60 caracteres.';
    } else if (!patronTexto.test(nombre)) {
        errores.nombre = 'El nombre contiene caracteres no permitidos.';
    }

    // Validar marca
    if (marca.length < 2 || marca.length > 40) {
        errores.marca = 'La marca debe tener entre 2 y 40 caracteres.';
    } else if (!patronTexto.test(marca)) {
        errores.marca = 'La marca contiene caracteres no permitidos.';
    }

    // Validar tipo
    if (tipo.length < 2 || tipo.length > 40) {
        errores.tipo = 'El tipo debe tener entre 2 y 40 caracteres.';
    } else if (!patronTexto.test(tipo)) {
        errores.tipo = 'El tipo contiene caracteres no permitidos.';
    }

    // Validar categoría
    const categoriasPermitidas = [
        'Abarrotes',
        'Lácteos',
        'Frutas',
        'Panadería',
        'Otros'
    ];

    if (!categoriasPermitidas.includes(formulario.categoria)) {
        errores.categoria = 'Selecciona una categoría válida.';
    }

    // Validar precio
    const precio = String(formulario.precio).trim();

    if (
        !patronEntero.test(precio) ||
        !Number.isSafeInteger(Number(precio)) ||
        Number(precio) <= 0
    ) {
        errores.precio = 'Ingresa un precio entero mayor que cero.';
    }

    // Validar stock
    const stock = String(formulario.stock).trim();

    if (
        !patronEntero.test(stock) ||
        !Number.isSafeInteger(Number(stock))
    ) {
        errores.stock = 'Ingresa un stock entero igual o mayor que cero.';
    }

    return errores;
}