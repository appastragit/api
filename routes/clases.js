'use strict'

const express = require('express');
const router = express.Router();
const clasesController = require('../controllers/clases');


router.get(
    '/clases/test', 
    clasesController.test
);

router.post(
    '/clases/new', 
    clasesController.new
);

router.get(
    '/clases/getall', 
    clasesController.getall
);

router.get(
    '/clases/getbyid/:clase_id', 
    clasesController.getbyid
);

router.post(
    '/clases/modify/:clase_id', 
    clasesController.modify
);

router.delete(
    '/clases/delete/:clase_id', 
    clasesController.delete
);

module.exports = router;