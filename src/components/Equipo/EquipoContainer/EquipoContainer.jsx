import { useState, useEffect } from 'react';
import styles from './EquipoContainer.module.css';
import { EquipoList } from '../EquipoList/EquipoList';  

export function EquipoContainer() {
    const [equipos, setEquipos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true); 

    useEffect(() => {
        // Creamos un controlador de abort para cancelar la solicitud si el componente se desmonta
        const controller = new AbortController();

        fetch('/data/equipos.json', { signal: controller.signal })
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error('No se pudo cargar la información del equipo');
                }
                return respuesta.json();
            })
            .then((datos) => {
                setEquipos(datos);
            })
            .catch((error) => {
                if (error.name !== 'AbortError') {
                    setError(error.message);
                }
            })
            .finally(() => {
                if (!controller.signal.aborted) {
                    // Solo actualizamos el estado si la solicitud no fue abortada
                    setCargando(false);
                }
            });

        return () => controller.abort();
    }, []);

    if (cargando) { 
        return <p>Cargando equipos, por favor espere...</p>; 
    } 
    if (error) { 
        return <p>Error: {error}</p>; 
    } 

    return (
        <>
            <section className={styles.contenedorEquipos}>             
                <EquipoList equipos={equipos} />
            </section>          
        </>
    );
}