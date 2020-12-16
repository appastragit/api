const Sequelize = require("sequelize");
const sequelize = require('../mariadbDatabase');

const Clases = sequelize.define('temarios', {
    id_evento: {
        type: Sequelize.STRING,
    },
    titulo: {
        type: Sequelize.STRING,
    },
    descripcion: {
        type: Sequelize.STRING,
    },
    estado: {
        type: Sequelize.STRING,
    },
});

module.exports = Temarios;