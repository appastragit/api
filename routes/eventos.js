'use strict'

const express = require('express');
const router = express.Router();
const eventosController = require('../controllers/eventos');


router.get(
    '/eventos/test', 
    eventosController.test
);

module.exports = router;