module.exports = (sequelize, type) => {
    return sequelize.define('unidades', {
        id_clase: type.STRING,
        titulo: type.STRING,
        descripcion: type.STRING
    })
}