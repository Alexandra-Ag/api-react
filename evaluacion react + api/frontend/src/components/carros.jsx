import React, { useState } from "react";
import { FuncionRegistrar } from '../js/script';
import { Link } from "react-router-dom";

function carro() {
    const [Placa, setPlaca] = useState('');
    const [Marca, setMarca] = useState('');
    const [Color, setColor] = useState('');

    const luicarry = {
        Placa: Placa,
        Marca: Marca,
        Color: Color
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        // Llamada al endpoint de registro
        const resultadoRegistro = await FuncionRegistrar(luicarry);
        console.log(resultadoRegistro);
        
        setPlaca("");
        setMarca("");
        setColor("");
    };

    return (
        <div className="d-flex vh-100  text-warning justify-content-center align-items-center">
          <div className="w-50 bg-info rounded p-3">
            <form onSubmit={handleSubmit} className="bg-light p-4">
              <h2>Añadir Carro</h2>
              <div className="mb-3">
                <label htmlFor="placa" className="form-label">Placa</label>
                <input
                  type="text"
                  id="placa"
                  className="form-control"
                  placeholder="Poner placa"
                  value={Placa}
                  onChange={(e) => setPlaca(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="marca" className="form-label">Marca</label>
                <input
                  type="text"
                  id="marca"
                  className="form-control"
                  placeholder="Poner marca"
                  value={Marca}
                  onChange={(e) => setMarca(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="color" className="form-label">Color</label>
                <input
                  type="text"
                  id="color"
                  className="form-control"
                  placeholder="Poner color"
                  value={Color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary me-2">Agregar</button>
              <Link to="/get" className="btn btn-outline-warning me-2">Buscar</Link>
              <Link to="/registro" className="btn btn-outline-success">Tanqueo</Link>
            </form>
          </div>
        </div>
      );
    }
    
    export default carro;
       