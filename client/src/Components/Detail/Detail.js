import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Detail.css'
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetail } from '../../Redux/Actions/index.js';

export default function Detail() {
  const dispatch = useDispatch();
  const {id} = useParams()
  const detalle = useSelector((state)=> state.detail);
 
  useEffect(()=>{
    dispatch(getCountryDetail(id))
  }, [dispatch, id]);

  return (
    <div>
    
   
       aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
       <Link to="/countries"><button>Volver</button></Link>
    </div>
  )
}
