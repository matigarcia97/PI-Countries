const { Router } = require('express');

const { macaco } = require('../Controllers/ActivityControllers');
const { getAllCountries, getIdCountry } = require('../Controllers/CountryControllers');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get("/countries", getAllCountries);
router.get("/countries/:id", getIdCountry)

router.get("/activities", macaco)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
