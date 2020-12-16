module.exports = (sequelize, type) => {
    return sequelize.define('unidad', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_clase: type.STRING,
        titulo: type.STRING,
        descripcion: type.STRING
    })
}