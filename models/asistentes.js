module.exports = (sequelize, type) => {
    return sequelize.define('asistente', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: false
        },
        id_usuario: type.STRING,
        id_clase: type.STRING
    })
}