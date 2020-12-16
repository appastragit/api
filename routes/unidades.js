'use strict'

const express = require('express');
const router = express.Router();
const unidadesController = require('../controllers/unidades');


router.get(
    '/unidades/test', 
    unidadesController.test
);

module.exports = router;