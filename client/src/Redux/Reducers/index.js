//Creamos el estado inicial

const initialState = {
    countries: [],         //este array se va a ir modificando según los filtros que aplique en el front
    allCountries: [],      //en este array voy a tener siempre TODOS los paises
    activities:[],
    detail: [],   
}

function rootReducer(state= initialState, action){
    switch(action.type){
        case "GET_COUNTRIES":
            return{
                ...state,
                countries: action.payload,
                allCountries: action.payload,
            };
        
        case "GET_COUNTRY_NAME":
            return{
              ...state,
              countries: action.payload,
            };
        
        case "GET_COUNTRY_DETAIL":
            return{
                ...state,
                detail: action.payload,
            }

        case "POST_COUNTRY_ACTIVITY":
            return{
                ...state,
            };
        //FILTRAR POR CONTINENT -> Asia 
        case "FILTRAR_POR_CONTINENTE":
            const allCountries = state.allCountries;
            const FiltradoContinente = action.payload === "All" ? allCountries : allCountries.filter((elemento)=> elemento.continent === action.payload);
            return{
                ...state,
                countries: FiltradoContinente ,
            };

        case "FILTRAR_POR_ACTIVIDAD_TURISTICA":
            const FiltradoActividad =
            action.payload === "All" ? state.allCountries : state.allCountries.filter((c) => c.activities && c.activities.filter((a) => a.name === action.payload).length);
            return {
            ...state,
            countries: FiltradoActividad,
          };

        case "ORDENAR_CONTINENTE_ASC_DESC":
            const orderName = action.payload === 'asc' ? state.countries.sort((a,b) => {
                if(a.name > b.name) return 1;
                if(a.name < b.name) return -1;
                return 0;
              }) : state.countries.sort((a,b) => {
                if(a.name < b.name) return 1;
                if(a.name > b.name) return -1;
                return 0;
              })
            return {
              ...state, 
              countries: orderName
            };

        case "ORDENAR_POR_CANT_POBLACION":
            const orderByPopulation =
            action.payload === "desc" ? state.countries.sort(function (a,b) {
                  if (a.population > b.population) return 1;
                  if (b.population > a.population) return -1;
                  return 0;

                }) : state.countries.sort(function (a,b) {
                  if (a.population > b.population) return -1;
                  if (b.population > a.population) return 1;
                  return 0;
                });
            return {
            ...state,
            countries: orderByPopulation,
          };
        default:
            return state;
    }
}

export default rootReducer;