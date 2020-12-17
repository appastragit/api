module.exports = (sequelize, type) => {
    return sequelize.define('usuarios', {
        username: type.STRING,
        pass: type.STRING,
        nombre: type.STRING,
        apellidos: type.STRING,
        email: type.STRING,
        fecha_nacimiento : type.STRING,
        d_pais: type.STRING,
        d_provincia: type.STRING,
        d_localidad: type.STRING,
        d_cp: type.STRING,
        d_calle: type.STRING,  
        d_numero: type.STRING,
        d_piso : type.STRING,
        d_puerta : type.STRING,
        rol: type.STRING,
        avatar: type.STRING,
        estado: type.STRING
    })
}