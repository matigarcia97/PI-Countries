//Instalo axios e importo
import axios from 'axios';

//ACCIONES
export function getAllCountries(){
    return async function(dispatch){
        const countries = await axios.get("http://localhost:3001/countries")
        return dispatch({
            type: "GET_COUNTRIES",
            payload: countries.data,
        })
    }
}

export function getCountryName(name) {
    return async function(dispatch){
        try {
            const countryName = await axios.get(`http://localhost:3001/countries?name=${name}`)
            return dispatch({
                type: "'GET_COUNTRY_NAME",
                payload: countryName.data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getCountryDetail(id){
    return async function(dispatch){
        try {
            const countryDetail = await axios.get(`http://localhost:3001/countries/${id}`)
            return dispatch({
                type: "GET_COUNTRY_DETAIL",
                payload: countryDetail.data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function postCountryActivity(payload){
    return async function (dispatch){
        const response = await axios.post("http://localhost:3001/countries", payload)
        return dispatch({
           type: "POST_COUNTRY_ACTIVITY",
           payload: response.data,
        })
    }
}


export function filterByContinent(payload){
  return {
    type: "FILTRAR_POR_CONTINENTE",
    payload,
  }
}

export function filterByActivityTour(payload){
    return {
        type: "FILTRAR_POR_ACTIVIDAD_TURISTICA",
        payload,
    }
}

export function orderByContinentAscDesc(payload){
  return {
     type: "ORDENAR_CONTINENTE_ASC_DESC",
     payload,
  }
}

export function orderByPopulation(payload){
  return {
    type: "ORDENAR_POR_CANT_POBLACION",
    payload
  }
}