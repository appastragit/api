const express = require('express');
const bodyParser = require('body-parser');

const app = express ();

require ('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.get ('/', (req,res) => {
    res.send('Nainnn!');
});

app.listen(3999, () => {
    console.log('Se levanta el servidor en el puerto 3999')
});