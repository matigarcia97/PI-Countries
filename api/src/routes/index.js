const { Router } = require('express');

const { getAllCountries, getIdCountry } = require('../Controllers/CountryControllers');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get("/countries", getAllCountries);
router.get("/countries/:id", getIdCountry)


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
