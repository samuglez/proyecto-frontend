import React, { useState, useEffect } from "react";
import axios from "axios";


const ModificarCurso = ({ cursos }) => {
    const URL = "https://refreshing-mark-361708.nw.r.appspot.com/api/cursos/";

    const extraerDatosDeUsuario = () => {
        const datosRecuperar = JSON.parse(localStorage.getItem("DatosUsuario"));
        if (datosRecuperar && datosRecuperar.token) {
            return [datosRecuperar.token, datosRecuperar.userId];
        }
    };
    const [curso, setCurso] = useState(cursos.curso);
    // const [docente, setDocente] = useState(cursos.docente);
    const [opcion, setOpcion] = useState(cursos.opcion);
    const [aula, setAula] = useState(cursos.aula);
    const [precio, setPrecio] = useState(cursos.precio);

    const modificar = async () => {
        await axios
            .patch(
                URL + cursos._id,
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
            .delete(URL + cursos._id, {
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
            <form>
                <h2>Curso</h2>
                {/* <label htmlFor="curso">Curso: </label><br /> */}
                <input
                    type="text"
                    placeholder={cursos.curso}
                    value={curso}
                    onChange={gestorCurso}
                />
                <div><label htmlFor="opcion">Opcion: </label></div>
                <select name="opcion" id="opcion" onChange={gestorOpcion} >
                    <option value=''>Seleccione una opcion</option>
                    <option value='Presencial'>Presencial</option>
                    <option value='Online'>Online</option>
                    <option value='Semi-presencial'>Semi-presencial</option>
                </select ><br />
                {/* <input
                    type="text"
                    placeholder={cursos.opcion}
                    value={opcion}
                    onChange={gestorOpcion}
                /> */}
                <label htmlFor="aula">Aula: </label><br />
                <select name="aula" id="aula" onChange={gestorAula} >
                    <option value=''>Seleccione una opcion</option>
                    <option value='Aula-1'>Aula-1</option>
                    <option value='Aula-2'>Aula-2</option>
                    <option value='Aula-3'>Aula-3</option>
                    <option value='Aula-4'>Aula-4</option>
                    <option value='Aula-5'>Aula-5</option>
                    <option value='Aula-Virtual'>Aula-Virtual</option>
                </select ><br />
                <label htmlFor="precio">Precio: </label><br />
                <input
                    type="number"
                    placeholder={"Precio: " + cursos.precio + " €"}
                    value={precio}
                    onChange={gestorPrecio}
                /> <br />
                <button type="Button" onClick={modificar}>
                    Modificar
                </button>
                <button

                    onClick={borrar}
                >
                    Eliminar
                </button>
            </form>
        </div>
    );
};

export default ModificarCurso;