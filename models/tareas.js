const Sequelize = require("sequelize");
const sequelize = require('../mariadbDatabase');

const Clases = sequelize.define('asistentes', {
    id_evento: {
        type: Sequelize.STRING,
    },
    id_usuario: {
        type: Sequelize.STRING,
    },
    fecha_fin: {
        type: Sequelize.DATE,
    },
    fecha_entrega: {
        type: Sequelize.DATE,
    },
    titulo: {
        type: Sequelize.STRING,
    },
    enunciado: {
        type: Sequelize.STRING,
    },
    calificacion: {
        type: Sequelize.STRING,
    },
    estado: {
        type: Sequelize.STRING,
    },
});

module.exports = Asistentes;