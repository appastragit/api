module.exports = (sequelize, type) => {
    return sequelize.define('archivos', {
        id_evento: type.STRING,
        id_usuario: type.STRING,
        tipo: type.STRING,
        archivo: type.STRING,
    })
}