const fs = require('fs');


let registros = [];

const crear = (d) => {

    let datos = {
        d: d,
        estado: false
    }

    leerArchivo();
    registros.push(datos);
    guardarArrchivo();
    return registros;
}

const guardarArrchivo = () => {
    let data = JSON.stringify(registros);
    fs.writeFile(`./BDD/data.json`, data, (err) => {});
}


const leerArchivo = () => {

    try {
        registros = require('../BDD/data');

    } catch (error) {
        registros = [];
    }


}


const actualizarDatos = (descripcion, estado) => {
    leerArchivo();
    let aindex = registros.findIndex((e) => {
        return e.d === descripcion;
    })
    if (aindex >= 0) {
        registros[aindex].estado = estado;
        guardarArrchivo();
        return true;
    } else {
        return false;
    }

}


const obtenerListado = () => {

    leerArchivo();
    return registros;
}


const eliminarDatos = (descripcion) => {
    leerArchivo();
    let eliminarindex = registros.findIndex((e) => {
        return e.d === descripcion;
    })
    if (eliminarindex >= 0) {
        let borrar = registros.splice(eliminarindex, 1);
        guardarArrchivo();
        return true;
    } else {
        return (`NO SE PUEDE ELIMINAR EL REGISTRO`);
    }

}



module.exports = {
    crear: crear,
    obtenerListado: obtenerListado,
    actualizarDatos: actualizarDatos,
    eliminarDatos: eliminarDatos
}