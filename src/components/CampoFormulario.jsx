
function CampoFormulario({
    etiqueta,
    nombre,
    tipo = 'text',
    valor,
    onChange,
    error,
    min,
    step
}) {
    const estiloCampo =
        'w-full rounded-lg border border-[#AABFC3] bg-white ' +
        'px-4 py-3 text-[#16232A] outline-none ' +
        'focus:border-[#075056] focus:ring-2 focus:ring-[#075056]/20';

    return (
        <>
            <label htmlFor={nombre}>{etiqueta}</label>

            <input
                id={nombre}
                name={nombre}
                type={tipo}
                value={valor}
                onChange={onChange}
                min={min}
                step={step}
                className={estiloCampo}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `error-${nombre}` : undefined}
                required
            />

            {error && (
                <p
                    id={`error-${nombre}`}
                    className="mensaje-error"
                    role="alert"
                >
                    {error}
                </p>
            )}
        </>
    );
}

export default CampoFormulario;
