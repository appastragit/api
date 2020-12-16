const Sequelize = require("sequelize");
const sequelize = require('../mariadbDatabase');

const Clases = sequelize.define('unidades', {
    id_clase: {
        type: Sequelize.STRING,
    },
    titulo: {
        type: Sequelize.STRING,
    },
    descripcion: {
        type: Sequelize.STRING,
    },
});

module.exports = Unidades;