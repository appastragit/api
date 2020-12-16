const Sequelize = require('sequelize');

module.exports = new Sequelize('appastra', 'appastra', 'appastra', {
    host: process.env.db || 'localhost',
    dialect: 'mariadb',
});

// descomentar para generar las tablas de la BBDD
// require ('./db');