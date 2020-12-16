const router = require('express').Router();

const clasesRouter = require('./routes/clases');

router.use('/clases', clasesRouter)

module.exports = router;