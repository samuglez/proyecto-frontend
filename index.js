const axios = require('axios');

//* CRUD de usuarios
//? Mostrar todos los usuarios
const getUsuarios = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/usuarios');

        const usuarios = response.data.usuario;

        return usuarios;

    } catch (error) {
        console.error(error);
    }
}

getUsuarios().then((datos) => {
    console.log(datos)
});

//? Mostrar un usuario por id
// const getUsuario = async (idUsuario) => {
//     try {
//         const response = await axios.get(`http://localhost:3000/api/usuarios/${idUsuario}`);

//         const oneUsuario = response.data.usuario;

//         return oneUsuario;

//     } catch (error) {
//         console.error(error);
//     }
// }

// getUsuario().then((datos) => {
//     console.log(datos)
// });

//? Añadir un usuario
// const postUsuario = async (nombre, email, password, cursos, activo) => {

//     await axios.post('http://localhost:3000/api/usuarios', {
//         nombre: nombre,
//         email: email,
//         password: password,
//         cursos: cursos,
//         activo: activo
//     }).then((response) => {
//         console.log(response.data);
//     }).catch((error) => {
//         console.log(error.message);
//     })

// }


// postUsuario()


//? Eliminar un usuario
// const deleteUsuario = async (idUsuario) => {
//     await axios.delete(`http://localhost:3000/api/usuarios/${idUsuario}`).then((response) => {
//         console.log(response.data);
//     }).catch((error) => {
//         console.log(error.message);
//     })

// }

// deleteUsuario()


//? Modificar un usuario
// const modificarUsuario = async (idUsuario, camposPorCambiar) => {
//     await axios
//         .patch(`http://localhost:3000/api/usuarios/${idUsuario}`, camposPorCambiar)
//         .then((response) => {
//             console.log(response.data);
//         })
//         .catch((error) => {
//             console.log(error.message);
//         });
// };
// let camposPorCambiar = {
//     email: ""
// };
// modificarUsuario();

//* CRUD de cursos

//? Mostrar todos los cursos
// const getCursos = async () => {
//     try {
//         const response = await axios.get('http://localhost:3000/api/cursos');

//         const cursos = response.data.curso;

//         return cursos;

//     } catch (error) {
//         console.error(error);
//     }
// }

// getCursos().then((datos) => {
//     console.log(datos)
// });


//? Mostrar un curso por su id
// const getCurso = async (idCurso) => {
//     try {
//         const response = await axios.get(`http://localhost:3000/api/cursos/${idCurso}`);

//         const oneCurso = response.data.curso;

//         return oneCurso;

//     } catch (error) {
//         console.error(error);
//     }
// }

// getCurso().then((datos) => {
//     console.log(datos)
// });


//? Añadir un curso
// const postCurso = async (curso, docente, opcion, aula, precio) => {

//     await axios.post('http://localhost:3000/api/cursos', {
//         curso: curso,
//         docente: docente,
//         opcion: opcion,
//         aula: aula,
//         precio: precio
//     }).then((response) => {
//         console.log(response.data);
//     }).catch((error) => {
//         console.log(error.message);
//     })

// }


// postCurso()


//? Eliminar un curso
// const deleteCurso = async (idCurso) => {
//     await axios.delete(`http://localhost:3000/api/cursos/${idCurso}`).then((response) => {
//         console.log(response.data);
//     }).catch((error) => {
//         console.log(error.message);
//     })

// }


// deleteCurso()


//? Modificar un curso
// const modificarCurso = async (idCurso, camposPorCambiar) => {
//     await axios
//         .patch(`http://localhost:3000/api/cursos/${idCurso}`, camposPorCambiar)
//         .then((response) => {
//             console.log(response.data);
//         })
//         .catch((error) => {
//             console.log(error.message);
//         });
// };
// let camposPorCambiar = {
//     docente: ""
// };
// modificarCurso("", camposPorCambiar);