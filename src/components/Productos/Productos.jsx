import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList'; 
import styles from './Productos.module.css';
import FormularioContainer from '../FormularioContainer/FormularioContainer';

function Productos({ Mensaje }) {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    // Función para alternar entre mostrar y ocultar
    const toggleFormulario = () => {
        setMostrarFormulario(!mostrarFormulario);
    };

    useEffect(() => {
        const obtenerProductos = async () => {
            try{
                const respuesta = await fetch('/data/productos.json');

                if(!respuesta.ok) {
                    throw new Error("No se pudo cargar la información de los productos");
                }

                const datos = await respuesta.json();
                setProductos(datos);
            } catch (error) {
                setError(error.message || 'No se pudo cargar la información de los productos');
            } finally {
                setCargando(false);
            }
        };
        obtenerProductos();

    }, []);
    
    if (cargando) {
        return <p>Cargando productos, por favor espere...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <section className={styles.contenedorProductos}>
                <h1 style={{ display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        gap: '15px' }}>
                    {Mensaje}
                </h1>

                <ItemList productos={productos} />
            </section>
            <section className={styles.contenedorFormulario}>

                <button onClick={toggleFormulario} 
                        className={styles.btnToggleFormulario}
                >
                    {mostrarFormulario ? "❌ Cerrar" : "➕ Agregar Producto"}
                </button>
            </section>
            {mostrarFormulario && (
                <div className={styles.contenedorFormulario}>
                    <FormularioContainer />
                </div>
            )}
    </>
    );
}
export default Productos;