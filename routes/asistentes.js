'use strict'

const express = require('express');
const router = express.Router();
const asistentesController = require('../controllers/asistentes');


router.get(
    '/asistentes/test', 
    asistentesController.test
);

module.exports = router;