import React from "react";

const Buscando = ({ datos }) => {
    return (
        <div className="tabla">
            {datos.map((dato) => {
                return (
                    <tr key={dato._id}>
                        <td>{dato.curso}</td>
                        {dato.docente !== null ? (
                            <td>{dato.docente.nombre}</td>
                        ) : (
                            <td>No Asignado</td>
                        )}
                    </tr>
                );
            })}
        </div>
    );
};

export default Buscando;