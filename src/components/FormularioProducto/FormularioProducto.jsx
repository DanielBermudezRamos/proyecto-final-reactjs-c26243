import styles from './FormularioProducto.module.css';

export function FormularioProducto({ datosForm, manejarCambio, manejarCambioImagen, manejarEnvio }) {
    
    return (
        <form className={styles.formContainer} 
            onSubmit={manejarEnvio}>
            <h2>Agregar Nuevo Producto</h2>

            <div className={styles.fieldGroup}>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Ej. Arepa Pelúa"
                    value={datosForm.nombre}
                    onChange={manejarCambio}
                    required
                />
            </div>

            <div className={styles.fieldGroup}>
                <label htmlFor="categoria">Categoría:</label>
                <select
                    id="categoria"
                    name="categoria"
                    value={datosForm.categoria}
                    onChange={manejarCambio}
                >
                    <option value="comida_rapida">🍔 Comida Rápida</option>
                    <option value="plato_principal">🥘 Plato Principal</option>
                    <option value="picada">🍟 Picada / Para Compartir</option>
                    <option value="bebidas">🥤 Bebidas</option>
                </select>
            </div>

            <div className={styles.fieldGroup}>
                <label htmlFor="imagen">Imagen:</label>
                <input
                    type="file"
                    id="imagen"
                    name="imagen"
                    placeholder="c:/imagenes/ejemplo.com/foto.jpg"
                    value={datosForm.urlImagen}
                    onChange={manejarCambioImagen}
                />
            </div>

            <div className={styles.row}>
                <div className={styles.fieldGroup}>
                    <label htmlFor="precio">Precio ($):</label>
                    <input
                        type="number"
                        name="precio"
                        placeholder="0"
                        value={datosForm.precio}
                        onChange={manejarCambio}
                        required
                    />
                </div>

                <div className={styles.fieldGroup}>
                    <label htmlFor="stock">Stock:</label>
                    <input
                        type="number"
                        name="stock"
                        placeholder="0"
                        value={datosForm.stock}
                        onChange={manejarCambio}
                    />
                </div>
            </div>

            <div className={styles.fieldGroup}>
                <label htmlFor="tiempoPreparacion">Tiempo Prep.:</label>
                <input
                    type="text"
                    name="tiempoPreparacion"
                    placeholder="Ej. 15-20 min"
                    value={datosForm.tiempoPreparacion}
                    onChange={manejarCambio}
                />
            </div>

            <div className={styles.fieldGroup}>
                <label htmlFor="descripcion">Descripción:</label>
                <textarea
                    name="descripcion"
                    rows="3"
                    placeholder="Ingredientes y detalles del plato..."
                    value={datosForm.descripcion}
                    onChange={manejarCambio}
                />
            </div>

            <button type="submit" className={styles.btnSubmit}>
                Guardar
            </button>
        </form>
    );
}