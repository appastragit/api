'use strict'

const express = require('express');
const router = express.Router();
const clasesController = require('../controllers/clases');


router.get(
    '/clases/test', 
    clasesController.test
);

module.exports = router;