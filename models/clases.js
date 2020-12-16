module.exports = (sequelize, type) => {
    return sequelize.define('clase', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pass: type.STRING,
        id_profesor: type.STRING,
        nombre: type.STRING,
        color: type.STRING
    })
}