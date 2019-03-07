const opcionescrear = {
    descripcion: {
        demand: true,
        alias: '-d'
    },

}

const opcionesactualizar = {
    descripcion: {
        demand: true,
        alias: '-d'
    },
    actualizar: {
        alias: '-c',
        default: true
    }
}


const opcioneseliminar = {
    descripcion: {
        demand: true,
        alias: '-d'
    }
}

const argv = require('yargs')
    .command('crear', 'CREAR UN NUEVO REGISTRO', opcionescrear)
    .command('actualizar', 'ACTUALIZA UN NUEVO REGISTRO', opcionesactualizar)
    .command('eliminar', 'ELIMINAR UN NUEVO REGISTRO', opcioneseliminar)
    .help()
    .argv;

module.exports = {
    argv: argv
}