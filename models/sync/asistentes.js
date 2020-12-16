module.exports = (sequelize, type) => {
    return sequelize.define('asistentes', {
        id_usuario: type.STRING,
        id_clase: type.STRING
    })
}