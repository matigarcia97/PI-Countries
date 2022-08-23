const { Router } = require('express');

const { getAllCountries, getIdCountry } = require('../Controllers/CountryControllers');
const { postActivity, getAllActivity } = require('../Controllers/ActivityControllers');    

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get("/countries", getAllCountries);
router.get("/countries/:id", getIdCountry)


router.get("/activity", getAllActivity)
router.post("/activity", postActivity)


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
