'use strict'
const Clases = require('../models/clases');

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
        Clases.create(body)
        .then(clase => {
            return res.status(200).send({
                status: "OK",
                clase
            });
        })
        .catch(err => {
            return res.status(200).send({
                status: "ERR[1]",
                msg: "Ocurrio un error mientras se insertaban los datos"
            });
        })
    },

    getall: function(req, res){
        Clases.findAll()
        .then(clases => {
            return res.status(200).send({
                status: 'OK',
                clases: clases
            })
        })
        .catch(err => {
            return res.status(200).send({
                msg: err,
                status: 'ERR[1]'
            })
        })
    },

    getbyid: function(req, res){
        var clase_id = req.params.class_id;
        Clases.findAll({
            where: {
                id: clase_id
            }
        })
        .then(clase =>{
            if (JSON.stringify(clase) == '[]'){
                return res.status(200).send({
                    status: "ERR[1]",
                    msg: "No existe la clase"
                })
            } else {
                return res.status(200).send({
                    clase: clase,
                    status: "OK"
                })
            }
        })
        .catch(err =>{
            return res.status(200).send({
                msg: "Se produjo un error inesperado en la consulta",
                status: 'ERR[2]'
            })
        })
    },

    modify: function(req, res){
        var clase_id = req.params.clase_id;
        var body = req.body;
        Clases.findAll({ where: {
            id: clase_id
        }})
        .then(clase => {
            if (clase) {
                Clases.update(body,
                {
                    where: {
                        id: clase_id
                    }
                })
                .then(clase_updated => {
                    return res.status(200).send({
                        clase_updated: clase_updated,
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
    },

    delete: function(req, res){
        var class_id = req.params.class_id;
        Clases.destroy({
            where: {
                id: class_id
            }
        })
        .then(clase_deleted => {
            return res.status(200).send({
                status: "OK",
                clase_deleted
            })
        })
        .catch(err => {
            return res.status(200).send({
                status: 'ERR[1]',
                msg: err
            })
        })
    },
}

module.exports = controller