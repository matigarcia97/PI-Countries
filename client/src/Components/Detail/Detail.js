import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Detail.css'
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetail } from '../../Redux/Actions/index.js'

export default function Detail() {
  const dispatch = useDispatch();
  const {id} = useParams()
  const detalle = useSelector((state)=> state.detail);
 
  useEffect(()=>{
    dispatch(getCountryDetail(id))
  }, [dispatch, id]);

  return (
    <div className='detail'>

      <div className='bot'>
       <Link to="/home"><button className='boton-volver'>Volver</button></Link>
      </div>

      <div className='padre-container'>
        <img className='imagen' src={detalle.image} alt="image" />
        <p className='color'> Name: {detalle.name} </p>
        <p className='color'> Continent:{detalle.continent} </p>
        <p className='color'> Capital:{detalle.capital} </p>
        <p className='color'> Subregion:{detalle.subRegion} </p>
        <p className='color'> Area:{" "} {parseInt(detalle.area).toLocaleString()} km2 </p>
        <p className='color'> Population:{" "} {parseInt(detalle.population).toLocaleString()} </p>

        <h4 className='color-act'>Activities </h4>
          {detalle.activities && detalle.activities?.map((e) => (
            <div key={e.id}>
                <p className='color'>Name: {e.name}</p>
                <p className='color'>Season: {e.season} </p>
                <p className='color'>Duration: {e.duration} </p>
                <p className='color'>Difficulty: {e.difficulty} </p>
            </div>
          ))}
      </div>
    </div>
  )
}
