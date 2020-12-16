module.exports = (sequelize, type) => {
    return sequelize.define('eventos', {
        id_clase: type.STRING,
        id_unidad: type.STRING,
        tipo: type.STRING 
    })
}