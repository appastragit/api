'use strict'

const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios');


router.get(
    '/usuarios/test', 
    usuariosController.test
);

module.exports = router;