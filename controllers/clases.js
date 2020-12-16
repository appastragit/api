'use strict'
const Clases = require('../models/clases');
const fs = require('fs');
const path = require('path');

var controller = {
    test: function(req, res){
        console.log('test')
        return res.status(200).send({
            msg: "test",
            status: 'OK'
        })
    },
}

module.exports = controller