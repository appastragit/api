'use strict'

const express = require('express');
const router = express.Router();
const tareasController = require('../controllers/tareas');


router.get(
    '/tareas/test', 
    tareasController.test
);

module.exports = router;