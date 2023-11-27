import React, { useState, useEffect } from "react";
import { FuncionEditar, FuncionObtenerDatos } from '../js/script';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function UpdateUsers() {
    const { id } = useParams();
    const [Placa, setPlaca] = useState("");
    const [Marca, setMarca] = useState("");
    const [Color, setColor] = useState("");

    // Estado adicional para manejar la carga de datos
    const [loading, setLoading] = useState(true);

    // Aquí puedes utilizar useEffect para cargar los datos del carro al montar el componente
    useEffect(() => {
        const fetchData = async () => {
            try {
                const carData = await FuncionObtenerDatos(id);
                setPlaca(carData.Placa || "");
                setMarca(carData.Marca || "");
                setColor(carData.Color || "");
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener datos del carro:', error.message);
            }
        };

        fetchData(); // Llama a la función para obtener datos al montar el componente
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        console.log('Valor de Color antes de la edición:', Color);
    
        // Validación básica de datos
        if (!Placa || !Marca || !Color) {
            console.error('Todos los campos deben ser completados.');
            return;
        }
    
        try {
            const response = await FuncionEditar(id, { Placa, Marca, Color });
            console.log('Respuesta de la función de editar:', response);
        } catch (error) {
            console.error('Error al editar carro:', error.message);
        }
    };
    
    

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
          <div className="w-50 bg-white rounded p-3">
            <form onSubmit={handleSubmit} className="bg-light p-4">
                    <h2>Actualizar</h2>
                    <div className="mb-2">
                        <label htmlFor="placa">Placa:</label>
                        <input
                            type="text"
                            id="placa"
                            placeholder="poner Placa"
                            className="form-control"
                            value={Placa}
                            onChange={(e) => setPlaca(e.target.value)}
                            disabled={loading} // Deshabilitar el campo mientras se cargan los datos
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="marca">Marca:</label>
                        <input
                            type="text"
                            id="marca"
                            placeholder="poner Marca"
                            className="form-control"
                            value={Marca}
                            onChange={(e) => setMarca(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="color">Color:</label>
                        <input
                            type="text"
                            id="color"
                            placeholder="poner Color"
                            className="form-control"
                            value={Color}
                            onChange={(e) => setColor(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">
                        Actualizar
                    </button>
                    <Link to="/get" className="btn btn-warning me-2">atras</Link>
                </form>
            </div>
        </div>
    );
}

export default UpdateUsers;
