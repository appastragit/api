const router = require('express').Router();

router.get('/', (req,res) => {
    res.send('Ruta clases');
});

module.exports = router;