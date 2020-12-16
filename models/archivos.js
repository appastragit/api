module.exports = (sequelize, type) => {
    return sequelize.define('archivo', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: false
        },
        id_evento: type.STRING,
        id_usuario: type.STRING,
        tipo: type.STRING,
        archivo: type.STRING
    })
}