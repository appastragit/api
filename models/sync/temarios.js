module.exports = (sequelize, type) => {
    return sequelize.define('temarios', {
        id_evento: type.STRING,
        titulo: type.STRING,
        descripcion: type.TEXT,
        estado: type.STRING 
    })
}