const axios = require('axios')
const {Activity, Country} = require('../db.js')

// [ ] POST /activities:

const postCreateActivity = async (req, res) => {
  const {name , difficulty, duration, season, countries} = req.body;

  const newCreateActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  })

  countries.forEach(async (countries) => {
    let actCountry = await Country.findAll({
        where:{name: countries}
    })
    await newCreateActivity.addCountry(actCountry)
    });
    res.status(200).json("Actividad creada ")
}

const getActivity = async(req, res) =>{
    try {
        const actInfo = await Activity.findAll({
            attributes: ['name'],
            include: Country
        })
        res.send(actInfo)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    postCreateActivity,
    getActivity,
}




// const macaco = (req, res) =>{
//     res.send("gay")
// }

// module.exports = {
//     macaco,
// }