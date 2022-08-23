import React from "react";
import '../Filter/Filter.css';
import { useState} from "react";
import { useDispatch} from "react-redux";
import { filterByContinent } from "../../Redux/Actions/index.js";

export default function Filter() {
  const dispatch = useDispatch();
  const [order , setOrder] = useState("")

  //#########################################################
  function handleFilterByContinent(e){
    e.preventDefault()
    dispatch(filterByContinent(e.target.value))
    setOrder(`${e.target.value}`);
  }

  // function handleFilterByActivity(e){

  // }

  // function handleOrderAscDesc(e){
  //   e.preventDefault()
  //   dispatch(orderByContinentAscDesc(e.target.value))
  //   setOrder(e.target.value);
  // }

  // function handleOrderPop(e){
  //   e.preventDefault()
  //   dispatch(orderByPopulation(e.target.value))
  //   setOrder(`Ordenado ${e.target.value}`);
  // }
  //#########################################################
  return (
    <div className="filter">
      <span>Continente: </span>
        <select  onChange={(e)=> handleFilterByContinent(e)}>
          <option value='All'>All</option>
          <option value='Africa'>Africa</option>
          <option value='Antarctica'>Antarctica</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europa</option>
          <option value='North America'>North America</option>
          <option value='Oceania'>Oceania</option>
          <option value='South America'>South America</option>
        </select>
      {/* 
      <span>Actividad: </span>
        <select>
          <option>HOLA</option>
          <option>HOLA</option>
          <option>HOLA</option>
          <option>HOLA</option>
          <option>HOLA</option>
        </select>

      <span>Ordenar por: </span>                  
        <select>
          <option value='All'></option>
          <option value='asc'>A-Z</option>
          <option value='desc'>Z-A</option>
        </select>

      <span>Poblacion</span>
        <select onChange={(e)=>handleOrderPop(e)}>
          <option value='All'> All </option>
          <option value='asc'> Highest </option>
          <option value='desc'> Lowest </option>
        </select> */}
    </div>
  )
}
