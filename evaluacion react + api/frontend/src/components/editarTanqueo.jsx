import React, { useState, useEffect } from "react";
import { FuncionEditartan, FuncionObtenerDatostan } from '../js/script';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function UpdateTan() {
    const { id } = useParams();
    const [idc, setidc] = useState("");
    const [feche, setfeche] = useState("");
    const [Bomba, setbomba] = useState("");
    const [valortanqueo, setvalor] = useState("");

    // Estado adicional para manejar la carga de datos
    const [loading, setLoading] = useState(true);

    // Aquí puedes utilizar useEffect para cargar los datos del carro al montar el componente
    useEffect(() => {
        const fetchData = async () => {
            try {
                const TanData = await FuncionObtenerDatostan(id);
                setidc(TanData.idc || "");
                setfeche(TanData.feche || "");
                setbomba(TanData.Bomba || "");
                setvalor(TanData.valortanqueo || "");
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener datos del carro:', error.message);
            }
        };

        fetchData(); // Llama a la función para obtener datos al montar el componente
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
    
        // Validación básica de datos
        if (!idc || !feche || !Bomba|| !valortanqueo) {
            console.error('Todos los campos deben ser completados.');
            return;
        }
    
        try {
            const response = await FuncionEditartan(id, { idc, feche, Bomba, valortanqueo });
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
                        <label htmlFor="placa">Codigo:</label>
                        <input
                            type="text"
                            id="placa"
                            placeholder="poner Placa"
                            className="form-control"
                            value={idc}
                            onChange={(e) => setidc(e.target.value)}
                            disabled={loading} // Deshabilitar el campo mientras se cargan los datos
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="marca">Feche:</label>
                        <input
                            type="text"
                            id="marca"
                            placeholder="poner Marca"
                            className="form-control"
                            value={feche}
                            onChange={(e) => setfeche(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="color">Bomba:</label>
                        <input
                            type="text"
                            id="color"
                            placeholder="poner Color"
                            className="form-control"
                            value={Bomba}
                            onChange={(e) => setbomba(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="color">Valor del tanqueo:</label>
                        <input
                            type="text"
                            id="color"
                            placeholder="poner Color"
                            className="form-control"
                            value={valortanqueo}
                            onChange={(e) => setvalor(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">
                        Actualizar
                    </button>
                    <Link to="/getTan" className="btn btn-warning me-2">atras</Link>
                </form>
            </div>
        </div>
    );
}

export default UpdateTan;