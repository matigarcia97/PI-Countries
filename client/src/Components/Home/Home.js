import React, { useEffect } from 'react';
import '../Home/Home.css'

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getAllCountries } from '../../Redux/Actions';
import Card from '../Card/Card.js'
import NavBar from '../NavBar/NavBar';
import Paginado from '../Paginado/Paginado';

export default function Home() {
  const dispatch = useDispatch()

  const allCountries = useSelector((state)=> state.countries)
  const allActivities = useSelector((state)=> state.activities)

  //estado local para paginado
  const [PaginaActual, setPaginaActual] = useState(1)
  const [PaisesPorPagina, setPaisPorPagina] = useState(10)
  
  const indiceUltCountry = PaginaActual * PaisesPorPagina
  const indicePrimerCountry = indiceUltCountry - PaisesPorPagina

  const currentCountry = allCountries.slice(indicePrimerCountry, indiceUltCountry)
  
  const paginado = (paginaNumero) => {
    setPaginaActual(paginaNumero)
  }

  useEffect(()=>{
    dispatch(getAllCountries())
  }, [dispatch]);

  return (
    <div className='background'>
        <div className='caja-1'>
        <NavBar/>
        <div className='caja-2'>
          {currentCountry?.map((e)=>{
            return(
              <div className="caja-2-1" key={e.id}>
                <Link to={"/country/detail/" + e.id }>
                  <Card
                    id={e.id}
                    name={e.name}
                    image={e.image}
                    continent={e.continent}
                    />
                </Link>
              </div>
            )
          })}
        </div>
        <Paginado
          PaisesPorPagina={PaisesPorPagina}
          allCountries={allCountries.length}
          paginado={paginado}
        />
        </div>
    </div>
  )
}
