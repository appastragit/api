const Sequelize = require('sequelize');

const usuarioModel = require('./models/usuarios');
const archivoModel = require('./models/archivos');
const asistenteModel = require('./models/asistentes');
const claseModel = require('./models/clases');
const eventoModel = require('./models/eventos');
const tareaModel = require('./models/tareas');
const temarioModel = require('./models/temarios');
const unidadModel = require('./models/unidades');

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
