import { useState } from 'react';
import {FormularioProducto} from '../FormularioProducto/FormularioProducto'; 

function FormularioContainer() {
    const [datosForm, setDatosForm] = useState({
        id: '',
        nombre: '',
        categoria: 'comida_rapida',
        imagen: '',
        precio: '',
        stock: '',
        tiempoPreparacion: '',
        descripcion: '',
        extras: []
    });

    const [imagenFile, setImagenFile] = useState(null); 

    // Función para manejar los cambios en los inputs del formulario    
    const manejarCambio = (e) => {
        const { name, value } = e.target;

        /*
        if (name === 'precio' || name === 'stock') {
            // Validamos que el valor sea un número positivo
            value = parseFloat(value); // Convertimos a número si es precio o stock
            if (value < 0) { return; }
        }
        // */

        setDatosForm({ ...datosForm, [name]: value });
    };

    const manejarCambioImagen = (e) => {
        setImagenFile(e.target.files[0]); 
    }; 

    const manejarEnvio = async (e) => {
        e.preventDefault(); 
        // Validamos que el usuario haya seleccionado una imagen 
        if (!imagenFile) { 
            alert("Por favor, selecciona una imagen para el producto."); 
            return; 
        } 
        // --- Lógica para subir la imagen a Imgbb --- 
        const apiKey = import.meta.env.VITE_IMGBB_API_KEY; 
        const formData = new FormData(); 
        formData.append('image', imagenFile); 
 
        try { 
            console.log("Subiendo imagen a Imgbb..."); 
            const respuestaImgbb = await fetch(`https://api.imgbb.com/1/upload?expiration=7776000&key=${apiKey}`, { 
                method: 'POST', 
                body: formData, 
            });
            
            const datosImgbb = await respuestaImgbb.json(); 
            
            if (datosImgbb.success) { 
                console.log("Imagen subida con éxito. URL:", datosImgbb.data.url); 
                
                // Unimos la URL de la imagen con el resto de los datos del formulario 
                const productoCompleto = { 
                    ...datosForm, 
                    // Agregamos la URL obtenida 
                    imagen: datosImgbb.data.url  
                }; 
            console.log('Enviando los siguientes datos COMPLETOS a la API:', productoCompleto); 
    
            }
            else { 
                throw new Error('La subida de la imagen a Imgbb falló.'); 
            } 
        } catch (error) {
            console.error("Error en el proceso de envío:", error); 
            alert("Hubo un error al subir la imagen. Por favor, intentá de nuevo."); 
        }

    }
        
    return (
        <FormularioProducto
            datosForm={datosForm}
            manejarCambio={manejarCambio}
            manejarEnvio={manejarEnvio}
            manejarCambioImagen={manejarCambioImagen}
        />
    );    
}

export default FormularioContainer;