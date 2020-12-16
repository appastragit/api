const express = require('express');
const bodyParser = require('body-parser');

const app = express ();

require ('./db');
console.log('conectando a la base de datos')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.get ('/', (req,res) => {
    res.send('Nainnn!');
});

app.listen(8080, () => {
    console.log('Se levanta el servidor en el puerto 3999')
});
