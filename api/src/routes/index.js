const { Router } = require('express');

const { getAllCountries, getIdCountry } = require('../Controllers/CountryControllers');
const {  getActivity, postCreateActivity } = require('../Controllers/ActivityControllers');    

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get("/countries", getAllCountries);
router.get("/countries/:id", getIdCountry)


router.get("/activities", getActivity)

router.post("/activities", postCreateActivity)


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
