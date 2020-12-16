'use strict'

const express = require('express');
const router = express.Router();
const temariosController = require('../controllers/temarios');


router.get(
    '/temarios/test', 
    temariosController.test
);

module.exports = router;