const Sequelize = require('sequelize');

const usuarioModel = require('./models/sync/usuarios');
const archivoModel = require('./models/sync/archivos');
const asistenteModel = require('./models/sync/asistentes');
const claseModel = require('./models/sync/clases');
const eventoModel = require('./models/sync/eventos');
const tareaModel = require('./models/sync/tareas');
const temarioModel = require('./models/sync/temarios');
const unidadModel = require('./models/sync/unidades');

const sequelize = new Sequelize('appastra', 'appastra', 'appastra', {
    host: process.env.db || 'localhost',
    dialect: 'mariadb'
});

const usuario = usuarioModel(sequelize, Sequelize);
const archivo = archivoModel(sequelize, Sequelize);
const asistente = asistenteModel(sequelize, Sequelize);
const clase = claseModel(sequelize, Sequelize);
const evento = eventoModel(sequelize, Sequelize);
const tarea = tareaModel(sequelize, Sequelize);
const temario = temarioModel(sequelize, Sequelize);
const unidad = unidadModel(sequelize, Sequelize);

sequelize.sync({force: true})
    .then(() =>{
        console.log('Se han sincronizado las tablas correctamente')
    });

module.exports = {
    usuario,
    archivo,
    asistente,
    clase,
    evento,
    tarea,
    temario,
    unidad
}
