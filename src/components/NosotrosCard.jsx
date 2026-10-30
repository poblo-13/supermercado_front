function NosotrosCard({ informacion }) {
    return (
        <article className="nosotros-card">
            <h2>{informacion.titulo}</h2>
            <p>{informacion.descripcion}</p>
        </article>
    );
}

export default NosotrosCard;