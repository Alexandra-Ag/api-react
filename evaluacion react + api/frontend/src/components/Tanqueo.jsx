 import React, { useState, useEffect } from "react";
import { FuncionRegistrartan, FuncionObtenerListaCarros } from '../js/script';
import { Link } from "react-router-dom";

function Tan() {
    const [idc, setidc] = useState('');
    const [feche, setfeche] = useState('');
    const [Bomba, setbomba] = useState('');
    const [valortanqueo, setvalor] = useState('');
    const [Placa_Carro, setPlacaCarro] = useState('');
    const [listaCarros, setListaCarros] = useState([]);
    

    useEffect(() => {
        const cargarListaCarros = async () => {
            try {
                const carros = await FuncionObtenerListaCarros();
                console.log("Respuesta completa del servidor:", carros);

                if (carros && carros.length > 0) {
                    setListaCarros(carros);
                } else {
                    console.warn("La lista de carros está vacía o es nula.");
                }
            } catch (error) {
                console.error("Error al cargar la lista de carros:", error);
            }
        };

        cargarListaCarros();
    }, []);

    const Tanqueo = {
        idc: idc,
        feche: feche,
        Bomba: Bomba,
        valortanqueo: valortanqueo,
        Placa_Carro: Placa_Carro,
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const resultadoRegistro = await FuncionRegistrartan(Tanqueo);
            console.log(resultadoRegistro);

            setidc("");
            setfeche("");
            setbomba("");
            setvalor("");
            setPlacaCarro("");
        } catch (error) {
            console.error("Error al registrar el tanqueo:", error);
        }
    };

    return (
      <div className="d-flex vh-100 text-warning justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
      <form onSubmit={handleSubmit} className="bg-light p-4">
                    <h2>Añadir Tanqueo</h2>
                    <div className="mb-2">
                        <label htmlFor="name">Codigo</label>
                        <input
                            type="text"
                            placeholder="Poner codigo"
                            className="form-control"
                            value={idc}
                            onChange={(e) => setidc(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Fecha</label>
                        <input
                            type="text"
                            placeholder="Poner fecha"
                            className="form-control"
                            value={feche}
                            onChange={(e) => setfeche(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="age">Bomba</label>
                        <input
                            type="text"
                            placeholder="Poner bomba"
                            className="form-control"
                            value={Bomba}
                            onChange={(e) => setbomba(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="age">Valor Tanqueo</label>
                        <input
                            type="text"
                            placeholder="Poner valor tanqueo"
                            className="form-control"
                            value={valortanqueo}
                            onChange={(e) => setvalor(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="placaCarro">Placa del Carro</label>
                        <select
                            className="form-select"
                            value={Placa_Carro}
                            onChange={(e) => setPlacaCarro(e.target.value)}
                        >
                            <option value="">Seleccionar placa del carro</option>
                            {listaCarros && listaCarros.length > 0 ? (
                                listaCarros.map((carro) => (
                                    <option key={carro._id} value={carro._id}>
                                        {carro.Placa}
                                    </option>
                                ))
                            ) : (
                                <option value="" disabled>
                                    Sin carros disponibles
                                </option>
                            )}
                        </select>
                    </div>
                    <div className="d-grid gap-2">
                <button type="submit" className="btn btn-success btn-sm">Agregar</button>
                <Link to="/getTan" className="btn btn-info btn-sm">Buscar</Link>
                <Link to="/" className="btn btn-info">atras</Link>
              </div>
                </form>
            </div>
        </div>
    );
}

export default Tan;

    