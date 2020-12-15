const Sequelize = require('sequelize');

const usuarioModel = require('./models/usuarios');

const sequelize = new Sequelize('appastra', 'appastra', 'appastra', {
    host: process.env.db || 'localhost',
    dialect: 'mysql'
});

const usuario = usuarioModel(sequelize, Sequelize);

sequelize.sync({force: true})
    .then(() =>{
        console.log('Se han sincronizado las tablas correctamente')
    });

module.exports = {
    usuario
}
