import styles from './TarjetaEquipo.module.css';

export function TarjetaEquipo({ id, cargo, foto, mensaje }) {
    return (
        <div className={styles.card} key={id}>
            <img className={styles.image} src={foto} alt={cargo} />
            <p className={styles.cargo}>{cargo}</p>
            {/* Si mensaje es una cadena HTML */}
            {typeof mensaje === 'string' ? (
                <p 
                    className={styles.message} 
                    dangerouslySetInnerHTML={{ __html: mensaje }} 
                />
            ) : (
                <p className={styles.message}>{mensaje}</p>
            )}
        </div>
    );
}