import { useState } from "react";
import styles from './Item.module.css';

export function Item({ 
    nombre, 
    precio, 
    stock, 
    imagen, 
    descripcion, 
    categoria, 
    tiempoPreparacion, 
    extras = [] 
}) {
    const [esFavorito, setEsFavorito] = useState(false);
    const [cantidad, setCantidad] = useState(0);

    const decrementar = () => {
        if (cantidad > 0) setCantidad(cantidad - 1);
    };

    const incrementar = () => {
        if (cantidad < stock) setCantidad(cantidad + 1);
    };

    const toggleFavorito = () => {
        setEsFavorito(!esFavorito);
    };

    const agregarAlPedido = () => {
        if (cantidad === 0) {
            alert("Selecciona al menos 1 unidad para agregar al pedido.");
            return;
        }
        alert(`¡Agregaste ${cantidad} x ${nombre} al pedido!`);
    };

    return (
        <div className={styles.card}>
            {/* Imagen del plato */}
            {imagen && (
                <div className={styles.imageContainer}>
                    <img src={imagen} alt={nombre} className={styles.imagen} />
                    {tiempoPreparacion && (
                        <span className={styles.tiempoBadge}>⏱️ {tiempoPreparacion}</span>
                    )}
                </div>
            )}

            {/* Título y botón de favoritos */}
            <div className={styles.header}>
                <h3 className={styles.titulo}>{nombre}</h3>
                <button 
                    onClick={toggleFavorito}
                    className={styles.btnFavorito}
                    aria-label="Agregar a favoritos"
                >
                    {esFavorito ? "❤️" : "🤍"}
                </button>
            </div>

            {categoria && <span className={styles.categoria}>{categoria}</span>}

            {/* Descripción del producto */}
            {descripcion && <p className={styles.descripcion}>{descripcion}</p>}

            {/* Información de precio y stock */}
            <div className={styles.infoPrecio}>
                <span className={styles.precio}>${precio}</span>
                <span className={styles.stock}>Stock: {stock}</span>
            </div>

            {/* Extras opcionales (si los tiene) */}
            {extras.length > 0 && (
                <div className={styles.extrasContainer}>
                    <p className={styles.extrasTitulo}>Extras disponibles:</p>
                    <ul className={styles.extrasLista}>
                        {extras.map((extra, index) => (
                            <li key={index}>
                                {extra.nombre} (+${extra.precio})
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Selector de cantidad */}
            <div className={styles.cantidadContainer}>
                <button onClick={decrementar} className={styles.btnCantidad}>-</button>
                <span className={styles.cantidad}>{cantidad}</span>
                <button onClick={incrementar} className={styles.btnCantidad}>+</button>
            </div>

            {/* Botón principal */}
            <button 
                onClick={agregarAlPedido} 
                className={styles.btnAgregar}
                disabled={stock === 0}
            >
                {stock > 0 ? "Agregar al pedido" : "Agotado"}
            </button>
        </div>
    );
}