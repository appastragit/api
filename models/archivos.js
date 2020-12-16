const Sequelize = require("sequelize");
const sequelize = require('../mariadbDatabase');

const Clases = sequelize.define('archivos', {
    id_evento: {
        type: Sequelize.STRING,
    },
    id_usuario: {
        type: Sequelize.STRING,
    },
    tipo: {
        type: Sequelize.STRING,
    },
    archivo: {
        type: Sequelize.STRING,
    },
});

module.exports = Archivos;
