// modulos/regenerar/controlador.js
import axios from 'axios';

export const regenerarDesdeAPI = async (req, res) => {
  try {
    // Llamada de prueba a una API pública
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

    res.json({
      mensaje: 'Respuesta recibida de la API externa',
      datos: response.data
    });
  } catch (error) {
    res.status(500).json({
      error: 'Error al llamar a la API externa',
      detalle: error.message
    });
  }
};
