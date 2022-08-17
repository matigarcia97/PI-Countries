const axios = require('axios')
const {Country, Activity} = require('../db.js')

//[ ] GET /countries:

const getInfoApi = async (req, res) =>{
    const apiURL = await axios.get("https://restcountries.com/v3.1/all")
    const apiInformacion = await apiURL.data.map((elemento)=>{
        return{
            id: elemento.cca3,                          
            name: elemento.name.common,            
            image: elemento.flags.png,                
            continent: elemento.continents[0],
            capital: elemento.capital 
            ? elemento.capital.join(", ") 
            : "No existe capital",
            subRegion: elemento.subregion
            ? elemento.subregion
            : "No existe subregion",
            area: elemento.area,
            population: elemento.population,
        }
    })

apiInformacion.forEach( dato => {
    Country.findOrCreate({
        where:{id: dato.id},
        defaults:{
           id: dato.id,
           name: dato.name,
           image: dato.image,
           continent: dato.continent,
           capital: dato.capital,
           subRegion: dato.subRegion,
           area: dato.area,
           population: dato.population,  
        }
       
    })
})

const datoFullCountry = await Country.findAll({
    include:{
        model: Activity,
        attributes: [
            "name",
            "difficulty",
            "duration",
            "season"
        ],
        through: {
            attributes: [],
        }
    }
})
  return  datoFullCountry;
}

// [ ] GET /countries/{idPais}:

const getIdCountry = async(req, res) =>{
  try {

    const {id} = req.params;

    const idCountry = await Country.findByPk(id.toUpperCase(), {
        attributes: ["id", "name", "image", "continent", "capital", "subRegion", "area", "population"],
        include: Activity
    })
    idCountry
    ? res.send(idCountry)
    : res.send("El pais ingresado no existe")
  } catch (error) {
    res.send(error)
  }
}

// [ ] GET /countries?name="..."

 const getAllCountries = async (req, res) =>{

   const {name} = req.query
   
   const allCountries = await getInfoApi()

    if(name){
         let nameCountries = await allCountries.filter( el => el.name.toLowerCase().includes(name.toLocaleLowerCase()))
      if(nameCountries){
       res.status(200).send(nameCountries)
      }else{
        res.status(404).send("No existe pais")
     }
    }else{
        res.status(200).json(allCountries)
    }
}

module.exports = {
    getInfoApi,
    getAllCountries,
    getIdCountry,
}