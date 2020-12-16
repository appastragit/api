const express = require('express');
const sequelize = require("./mariadbDatabase");
const app = require('./app');

const port = 8443;

console.clear();

try {
    sequelize.authenticate()
        .then(() => {
            console.log('Sequelize - OK', 'Sequelize establecio una conexión con la base de datos satisfactoriamente');
            app.listen(port, () => {
                console.log("Server - OK", "El servidor se ha iniciado correctamente y esta escuchando en el puerto", port);
            })
        })
        .catch(err => {
            console.error('Sequelize - ERR', 'Sequelize no pudo establecer una conexión con la base de datos, el error se encuentra detallado a continuación:');
            console.error('detalles del error:', err)
    })
} catch (error) {
    console.error("Server - ERR", "Ha ocurrido un error inesperado mientras se intentaba levantar el servidor, el error se encuentra detallado a continuación:");
    console.error('detalles del error:', error);
}
