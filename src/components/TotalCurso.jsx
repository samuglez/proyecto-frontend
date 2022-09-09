// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";

// import ModificarCurso from "./ModificarCurso";

// const AreaDeTrabajo = () => {
//     let URL = "http://localhost:5000/api/cursos";

//     const {
//         register,
//         handleSubmit,
//         setValue,
//         formState: { errors },
//     } = useForm();

//     const extraerDatosDeUsuario = () => {
//         const datosRecuperar = JSON.parse(localStorage.getItem("DatosUsuario"));

//         if (datosRecuperar && datosRecuperar.token) {

//             return [datosRecuperar.token, datosRecuperar.userId];
//         }
//     };

//     const crearCurso = async (data) => {
//         await axios
//             .post(
//                 URL,
//                 {
//                     curso: data.curso,
//                     docente: extraerDatosDeUsuario()[1],
//                     opcion: data.opcion,
//                     aula: data.aula,
//                     precio: data.precio,
//                 },
//                 {
//                     headers: {
//                         Authorization: "Bearer " + extraerDatosDeUsuario()[0],
//                     },
//                 }
//             )
//             .then((response) => {
//                 getAllCursos();
//                 setValue("curso", null);
//                 setValue("docente", null);
//                 setValue("opcion", null);
//                 setValue("aula", null);
//                 setValue("precio", null);
//                 console.log("Todo correcto", response.data);
//             })
//             .catch((error) => {
//                 console.log(error.response.data);
//             });
//     };

//     const [cursos, setCursos] = useState([]);

//     const getAllCursos = async () => {
//         try {
//             const response = await axios.get(URL, {
//                 headers: {
//                     Authorization: "Bearer " + extraerDatosDeUsuario()[0],
//                 },
//             });
//             setCursos(response.data.cursos);
//         } catch (e) {
//             console.log(e.message);
//         }
//     };

//     useEffect(() => {
//         getAllCursos();
//     }, []);
//     return (
//         <div>
//             <h2 style={{ textAlign: "center", color: "rgba(0, 0, 0, 0.285)" }}>
//                 WeLcome
//             </h2>
//             <div className="Form">
//                 <form onSubmit={handleSubmit(crearCurso)}>
//                     <h1 className="title">Nuevo Curso</h1>
//                     <input
//                         className="input-all"
//                         type="text"
//                         name="nombre"
//                         placeholder="Nombre"
//                         {...register(
//                             "nombre",
//                             { minLength: 5 },
//                             { required: true, message: "Campo requerido" }
//                         )}
//                     />
//                     {errors.nombre &&
//                         errors.nombre.type === "required" &&
//                         "Campo nombre requerido"}
//                     {errors.nombre &&
//                         errors.nombre.type === "minLength" &&
//                         "Longitud mínima de 5 caracteres"}
//                     <input
//                         className="input-all"
//                         type="number"
//                         name="horas"
//                         placeholder="Horas"
//                         {...register(
//                             "horas",
//                             { minLength: 1 },
//                             { required: true, message: "Campo requerido" }
//                         )}
//                     />
//                     {errors.horas &&
//                         errors.horas.type === "required" &&
//                         "Campo horas requerido"}
//                     {errors.horas &&
//                         errors.horas.type === "minLength" &&
//                         "curso debe ser mayos a 1 horas"}
//                     <input
//                         className="input-all"
//                         type="number"
//                         name="precio"
//                         placeholder="precio"
//                         {...register("precio", {
//                             required: true,
//                             message: "Campo requerido",
//                         })}
//                     />
//                     {errors.precio &&
//                         errors.precio.type === "required" &&
//                         "coloque el precio del curso"}

//                     <input
//                         type="submit"
//                         value="Crear Cuenta"
//                         id="submit"
//                         className="btn-all"
//                     />
//                 </form>
//             </div>

//             <div className="card-content">
//                 {cursos
//                     .filter((filter) => {
//                         return filter.docente._id === extraerDatosDeUsuario()[1];
//                     })
//                     .map((curso) => {
//                         return <ModificarCurso cursos={curso} key={curso._id} />;
//                     })}
//             </div>
//         </div>
//     );
// };

// export default AreaDeTrabajo;