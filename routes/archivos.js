'use strict'

const express = require('express');
const router = express.Router();
const archivosController = require('../controllers/archivos');


router.get(
    '/archivos/test', 
    archivosController.test
);

module.exports = router;