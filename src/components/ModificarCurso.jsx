import React, { useState, useEffect } from "react";
import axios from "axios";


const ModificarCurso = ({ cursos }) => {
    const URL = "http://localhost:5000/api/cursos";

    const extraerDatosDeUsuario = () => {
        const datosRecuperar = JSON.parse(localStorage.getItem("DatosUsuario"));
        if (datosRecuperar && datosRecuperar.token) {
            return [datosRecuperar.token, datosRecuperar.userId];
        }
    };
    const [curso, setCurso] = useState(cursos.curso);
    const [docente, setDocente] = useState(cursos.docente);
    const [opcion, setOpcion] = useState(cursos.opcion);
    const [aula, setAula] = useState(cursos.aula);
    const [precio, setPrecio] = useState(cursos.precio);

    const modificar = async () => {
        await axios
            .patch(
                URL + "/" + cursos._id,
                {
                    curso: curso,
                    docente: extraerDatosDeUsuario()[1],
                    opcion: opcion,
                    aula: aula,
                    precio: precio
                },
                {
                    headers: {
                        Authorization: "Bearer " + extraerDatosDeUsuario()[0],
                    },
                }
            )
            .then((response) => {
                window.location.reload(true);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    };

    const gestorCurso = (e) => {
        setCurso(e.target.value);
    };
    const gestorOpcion = (e) => {
        setOpcion(e.target.value);
    };
    const gestorAula = (e) => {
        setAula(e.target.value);
    };
    const gestorPrecio = (e) => {
        setPrecio(e.target.value);
    };
    const borrar = async () => {
        await axios
            .delete(URL + "/" + cursos._id, {
                headers: {
                    Authorization: "Bearer " + extraerDatosDeUsuario()[0],
                },
            })
            .then((response) => {
                window.location.reload(true);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }

    useEffect(() => { }, []);

    return (
        <div>
            <h2>Curso</h2>
            <input
                type="text"
                placeholder={cursos.curso}
                value={curso}
                onChange={gestorCurso}
            />
            Opcion :{" "}
            <input
                type="text"
                placeholder={cursos.opcion}
                value={opcion}
                onChange={gestorOpcion}
            />
            Aula :{" "}
            <input
                type="text"
                placeholder={cursos.aula}
                value={aula}
                onChange={gestorAula}
            />
            Precio :
            <input
                type="number"
                placeholder={"Precio: " + cursos.precio + " €"}
                value={precio}
                onChange={gestorPrecio}
            />
            <button type="Button" onClick={modificar}>
                Modificar
            </button>
            <button

                onClick={borrar}
            >
                Eliminar
            </button>
        </div>
    );
};

export default ModificarCurso;