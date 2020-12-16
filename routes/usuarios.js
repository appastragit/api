'use strict'

const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios');

//test
router.get(
    '/usuarios/test', 
    usuariosController.test
);
router.post(
    '/usuarios/new', 
    usuariosController.new
);

router.post(
    '/usuarios/login', 
    usuariosController.login
);

router.post(
    '/usuarios/modify/:usuario_id', 
    usuariosController.modify
);

module.exports = router;