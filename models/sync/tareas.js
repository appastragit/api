module.exports = (sequelize, type) => {
    return sequelize.define('tareas', {
        id_evento: type.STRING,
        id_usuario: type.STRING,
        fecha_fin: type.DATE,
        fecha_entrega: type.STRING,
        titulo: type.STRING,
        enunciado:type.TEXT,
        calificacion: type.STRING,
        estado: type.STRING
    })
}