module.exports = (sequelize, type) => {
    return sequelize.define('temario', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: false
        },
        id_evento: type.STRING,
        fecha_creacion: type.DATE,
        titulo: type.STRING,
        descripcion: type.TEXT,
        estado: type.STRING 
    })
}