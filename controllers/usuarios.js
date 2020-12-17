'use strict'
const Usuarios = require('../models/usuarios');

var controller = {
    test: function(req, res){
        console.log('test')
        return res.status(200).send({
            msg: "test",
            status: 'OK'
        })
    },

    new: function(req, res){
        const body = req.body;
        Usuarios.findAll({
            where: {
                username: body.username
            }
        })
        .then(usuario =>{
            if (JSON.stringify(usuario) == '[]'){
                Usuarios.findAll({
                    where: {
                        email: body.email
                    }
                })
                .then(usuario => {
                    if (JSON.stringify(usuario) == '[]'){
                        console.log(body)
                        const obj = JSON.parse(JSON.stringify(body));
                        Usuarios.create(obj)
                        .then(usuario => {
                            return res.status(200).send({
                                status: "OK",
                                usuario
                            });
                        })
                        .catch(err => {
                            return res.status(200).send({
                                status: err[1],
                                msg: "Ocurrio un error mientras se insertaban los datos"
                            });
                        })
                    } else {
                        return res.status(200).send({
                            status: "KO",
                            msg: "El email ya existe"
                        })
                    }
                })
            } else {
                return res.status(200).send({
                    status: "KO",
                    msg: "El usuario ya existe"
                })
            }
        })

    },

    login: function(req, res) {
        const body = req.body;
        Usuarios.findAll({
            where: {
                username:body.username,
                pass:body.pass
            }
        })
        .then(usuario => {
            if (JSON.stringify(usuario) == '[]'){
                return res.status(200).send({
                    status: "KO",
                    msg:"Usuario o contraseña inválido"
                })
            }
            else {
                return res.status(200).send ({
                    status:"OK",
                    msg:"Te has conectado correctamente",
                    usuario: usuario
                })
            }
        })
    },

    modify: function(req, res){
        var usuario_id = req.params.usuario_id;
        var body = req.body;
        Usuarios.findAll({ where: {
            id: usuario_id
        }})
        .then(usuario => {
            if (usuario) {
                Usuarios.update(body,
                {
                    where: {
                        id: usuario_id
                    }
                })
                .then(usuario_updated => {
                    return res.status(200).send({
                        usuario_updated: usuario_updated,
                        status: 'OK'
                    })
                })
                .catch(err => {
                    return res.status(200).send({
                        msg: err,
                        status: 'ERR[1]'
                    })
                })
            }
        })
        .catch(err => {
            console.log(err);
            return res.status(200).send({
                message: "Ha ocurrido un error inesperado",
                err: err
            })
        })
    }
}

module.exports = controller
