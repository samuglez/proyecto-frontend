import React from "react";

const Buscando = ({ datos }) => {
    return (
        <div className='container'>
            {datos.map((dato) => {
                return (
                    <div key={dato._id} className='card'>
                        <h2>{dato.curso}</h2>
                        {dato.docente !== null ? (
                            <h5>Docente: {dato.docente.nombre}</h5>
                        ) : (
                            <h5>No Asignado</h5>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Buscando;