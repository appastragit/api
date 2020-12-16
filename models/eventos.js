module.exports = (sequelize, type) => {
    return sequelize.define('evento', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: false
        },
        id_clase: type.STRING,
        id_unidad: type.STRING,
        tipo: type.STRING 
    })
}