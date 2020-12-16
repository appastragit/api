module.exports = (sequelize, type) => {
    return sequelize.define('clases', {
        pass: type.STRING,
        id_profesor: type.STRING,
        nombre: type.STRING,
        color: type.STRING
    })
}