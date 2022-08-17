const axios = require('axios')
const {Activity, Country} = require('../db.js')


// [ ] POST /activities:

const postActivity = async (req, res) => {
  const {name , difficulty, duration, season} = req.body;

  const newCreateActivity = await Country.create({
    name,
    difficulty,
    duration,
    season,
  })

  const actividad = await Activity.findAll({
    where:{
        name: 
    }
  })
}







module.exports = {
    postActivity,
}




// const macaco = (req, res) =>{
//     res.send("gay")
// }

// module.exports = {
//     macaco,
// }