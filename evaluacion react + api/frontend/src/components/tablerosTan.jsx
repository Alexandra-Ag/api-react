import React, { useState, useEffect } from 'react';
import { FuncionBuscarTa,FuncionEliminartan } from '../js/script';
import { Link } from "react-router-dom";

function TablaTanqueo() {
  const [TanData, setTanData] = useState([]);  // Definir carData como estado

  useEffect(() => {
    FuncionBuscarTa()
      .then(data => {
        setTanData(data);
      })
      .catch(error => console.error('Error al obtener datos de la API:', error));
  }, []);

  const handleDelete = async (tanId) => {
    try {
      await FuncionEliminartan(tanId);
      setTanData(prevTanData => prevTanData.filter(tan => tan._id !== tanId));
    } catch (error) {
      console.error('Error al eliminar carro:', error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Información del Tanqueo</h1>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Codigo</th>
            <th>Fecha</th>
            <th>Bomba</th>
            <th>Valor de Tanqueo</th>
            <th>Placa del carro</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {TanData.map((tan) => (
            <tr key={tan._id}>
              <td>{tan.idc}</td>
              <td>{tan.feche}</td>
              <td>{tan.Bomba}</td>
              <td>{tan.valortanqueo}</td>
              <td>{tan.Placa_Carro}</td>
              <td>
                <Link to={`/updateTan/${tan._id}`} className="btn btn-success">
                  Editar
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(tan._id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
              <td>
              <Link to="/registro" className="btn btn-outline-primary">atras</Link>
              </td>
    </div>
  );
};

export default TablaTanqueo;