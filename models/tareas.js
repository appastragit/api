module.exports = (sequelize, type) => {
    return sequelize.define('tarea', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_evento: type.STRING,
        id_usuario: type.STRING,
        fecha_creacion: type.DATE,
        fecha_fin: type.DATE,
        fecha_entrega: type.STRING,
        titulo: type.STRING,
        enunciado:type.TEXT,
        calificacion: type.STRING,
        estado: type.STRING
    })
}