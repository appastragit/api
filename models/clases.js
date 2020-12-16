const Sequelize = require("sequelize");
const sequelize = require('../mariadbDatabase');

const Clases = sequelize.define('clases', {
    pass: {
        type: Sequelize.STRING,
    },
    id_profesor: {
        type: Sequelize.STRING,
    },
    nombre: {
        type: Sequelize.STRING,
    },
    color: {
        type: Sequelize.STRING,
    },
});

module.exports = Clases;