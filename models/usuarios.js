const Sequelize = require("sequelize");
const sequelize = require('../mariadbDatabase');

const Clases = sequelize.define('usuarios', {
    username: {
        type: Sequelize.STRING,
    },
    pass: {
        type: Sequelize.STRING,
    },
    nombre: {
        type: Sequelize.STRING,
    },
    apellidos: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    fecha_nacimiento: {
        type: Sequelize.DATE,
    },
    d_pais: {
        type: Sequelize.STRING,
    },
    d_provincia: {
        type: Sequelize.STRING,
    },
    d_localidad: {
        type: Sequelize.STRING,
    },
    d_cp: {
        type: Sequelize.STRING,
    },
    d_calle: {
        type: Sequelize.STRING,
    },
    d_numero: {
        type: Sequelize.STRING,
    },
    d_piso: {
        type: Sequelize.STRING,
    },
    d_puerta: {
        type: Sequelize.STRING,
    },
    rol: {
        type: Sequelize.STRING,
    },
    avatar: {
        type: Sequelize.STRING,
    },
    estado: {
        type: Sequelize.STRING,
    },
});

module.exports = Usuarios;