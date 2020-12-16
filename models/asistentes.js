const Sequelize = require("sequelize");
const sequelize = require('../mariadbDatabase');

const Clases = sequelize.define('asistentes', {
    id_usuario: {
        type: Sequelize.STRING,
    },
    id_clase: {
        type: Sequelize.STRING,
    },
});

module.exports = Asistentes;
