const { argv } = require('./config/config')
const { crear, obtenerListado, actualizarDatos, eliminarDatos } = require('./BDD/registros')

let comando = argv._[0];
switch (comando) {
    case 'crear':
        let nuevor = crear(argv.d);
        console.log(nuevor);
        break;
    case 'listar':
        let obtenerr = obtenerListado();
        for (let t of obtenerr) {
            console.log(t);
        }
        break;
    case 'actualizar':
        let actualizar = actualizarDatos(argv.d, argv.actualizar);
        console.log(actualizar);
        break;
    case 'eliminar':
        let eliminar = eliminarDatos(argv.d);
        console.log(eliminar);
        break;
    default:
        console.log('NO EXISTE ESA OPCIÓN');
}