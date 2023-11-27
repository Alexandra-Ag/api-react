import React, { useState, useEffect } from 'react';
import { FuncionBuscar,FuncionEliminar } from '../js/script';
import { Link } from "react-router-dom";

function Tablacarros() {
  const [carData, setCarData] = useState([]);  // Definir carData como estado

  useEffect(() => {
    // Hacer la solicitud a tu API usando FuncionBuscar
    FuncionBuscar()
      .then(data => {
        // Actualizar el estado con los datos de la API
        setCarData(data);
      })
      .catch(error => console.error('Error al obtener datos de la API:', error));
  }, []);

  const handleDelete = async (carId) => {
    try {
      // Realizar la solicitud para eliminar el carro
      await FuncionEliminar(carId);

      // Actualizar el estado eliminando el carro de carData
      setCarData(prevCarData => prevCarData.filter(car => car._id !== carId));
    } catch (error) {
      console.error('Error al eliminar carro:', error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">informacin de lo carros</h1>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Placa</th>
            <th>Marca</th>
            <th>Color</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {carData.map((car) => (
            <tr key={car._id}>
              <td>{car.Placa}</td>
              <td>{car.Marca}</td>
              <td>{car.Color}</td>
              <td>
                <Link to={`/update/${car._id}`} className="btn btn-success">
                  Editar
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(car._id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <td>
              <Link to="/" className="btn btn-outline-primary">atras</Link>
              </td>
    </div>
  );
};

export default Tablacarros;