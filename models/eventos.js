const Sequelize = require("sequelize");
const sequelize = require('../mariadbDatabase');

const Clases = sequelize.define('eventos', {
    id_clase: {
        type: Sequelize.STRING,
    },
    id_unidad: {
        type: Sequelize.STRING,
    },
    tipo: {
        type: Sequelize.STRING,
    },
});

module.exports = Eventos;