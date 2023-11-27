//registro carro
export const FuncionRegistrar = async (carro) => {
  try {
    const response = await fetch('http://localhost:4000/api/carro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carro),
    });

    if (response.ok) {
      const data = await response.json(); 
      alert(data.message)
    } else {
      const errorResponse = await response.json();
      alert(errorResponse.message);
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
};

//registro Tanqueo
export const FuncionRegistrartan = async (Tanqueo) => {
  try {
      const response = await fetch('http://localhost:4000/api/tanqueo', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(Tanqueo),
      });

      if (response.ok) {
          const data = await response.json();
          console.log('Respuesta exitosa:', data); // Añadir este log
          alert(data.message);
      } else {
          const errorResponse = await response.json();
          console.error('Error en la solicitud:', errorResponse); // Añadir este log
          alert(errorResponse.message);
      }
  } catch (error) {
      console.error('Error en la solicitud:', error);
  }
};

//buscar carro
export const FuncionBuscar = async () => {
  try {
    const response = await fetch('http://localhost:4000/api/carro');
    console.log('Respuesta completa:', response);

    if (!response.ok) {
      throw new Error('Error al buscar proveedores');
    }

    const text = await response.text();
    console.log('Texto de la respuesta:', text);

    if (!text.trim()) {
      throw new Error('La respuesta está vacía');
    }

    const data = JSON.parse(text);
    return data;
  } catch (error) {
    console.error('Error en FuncionBuscar:', error);
    throw error;
  }
};

//buscar el tanqueo 
export const FuncionBuscarTa = async () => {
try {
  const response = await fetch('http://localhost:4000/api/tanqueo');
  console.log('Respuesta completa:', response);

  if (!response.ok) {
    throw new Error('Error al buscar proveedores');
  }

  const text = await response.text();
  console.log('Texto de la respuesta:', text);

  if (!text.trim()) {
    throw new Error('La respuesta está vacía');
  }

  const data = JSON.parse(text);
  return data;
} catch (error) {
  console.error('Error en FuncionBuscar:', error);
  throw error;
}
};

// editar carro
export const FuncionEditar = async (id, carro) => {
try {
    console.log('Datos a editar en FuncionEditar:', carro);

    const response = await fetch(`http://localhost:4000/api/carro/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(carro),
    });

    if (!response.ok) {
        throw new Error('Error al editar carro');
    }

    const data = await response.json();
    console.log('Respuesta de FuncionEditar:', data);
    return data;
} catch (error) {
    throw error;
}
};

//editar tanqueo
export const FuncionEditartan = async (id, tanqueo) => {
try {
    console.log('Datos a editar en FuncionEditar:', tanqueo);

    const response = await fetch(`http://localhost:4000/api/tanqueo/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tanqueo),
    });

    if (!response.ok) {
        throw new Error('Error al editar tanqueo');
    }

    const data = await response.json();
    console.log('Respuesta de FuncionEditar:', data);
    return data;
} catch (error) {
    throw error;
}
};

//eliminar carro
export const FuncionEliminar = async (carroId) => {
try {
  const response = await fetch(`http://localhost:4000/api/carro/${carroId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`Error al eliminar carro. Detalles: ${errorMessage}`);
  }

  const data = await response.json();
  return data;
} catch (error) {
  console.error('Error en FuncionEliminar:', error);
  throw error;
}
};

//eliminar tanqueo 
export const FuncionEliminartan = async (tanqueoId) => {
try {
  const response = await fetch(`http://localhost:4000/api/tanqueo/${tanqueoId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`Error al eliminar carro. Detalles: ${errorMessage}`);
  }

  const data = await response.json();
  return data;
} catch (error) {
  console.error('Error en FuncionEliminar:', error);
  throw error;
}
};

//obtener datos carro
// Función para obtener información de un carro por ID
export const FuncionObtenerDatos = async (carroId) => {
try {
    const response = await fetch(`http://localhost:4000/api/carro/${carroId}`);
    
    if (!response.ok) {
        throw new Error('Error al obtener datos del carro');
    }

    const data = await response.json();
    return data;
} catch (error) {
    console.error('Error en FuncionObtenerDatos:', error);
    throw error;
}
};

// Función para obtener la lista completa de carros
export const FuncionObtenerListaCarros = async () => {
try {
    const response = await fetch('http://localhost:4000/api/carro');

    if (!response.ok) {
        throw new Error(`Error al obtener la lista de carros. Código de estado: ${response.status}`);
    }

    const data = await response.json();
    return data || []; // Devuelve la respuesta completa del servidor
} catch (error) {
    console.error('Error en FuncionObtenerListaCarros:', error);
    throw error;
}
};

//obtener datos tanqueo
export const FuncionObtenerDatostan = async (tanqueoId) => {
try {
    const response = await fetch(`http://localhost:4000/api/tanqueo/${tanqueoId}`);
    
    if (!response.ok) {
        throw new Error('Error al obtener datos del tanqueo');
    }

    const data = await response.json();
    return data;
} catch (error) {
    console.error('Error en FuncionObtenerDatos:', error);
    throw error;
}
};