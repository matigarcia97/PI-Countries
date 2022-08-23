import React from 'react'
import '../SearchBar/SearchBar.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCountryName } from '../../Redux/Actions/index.js'
import { useState } from 'react'

export default function SearchBar() {
  const dispatch = useDispatch()
  const [name , setName] = useState('')

  function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    dispatch(getCountryName(name))
    setName('')
  }

  return (
    <div className='search'>
        <div>
          <Link to="/"><button>Inicio</button></Link>

          <input 
            className='busqueda'
            value={name}
            type='text' 
            placeholder="buscar razas..."
            onChange={(e)=>handleInputChange(e)}
            >
          </input>

          <button className="buscar" onClick={(e)=>handleSubmit(e)}>BUSCAR</button>

          <Link to="/country/createActivity"><button>Create Activity</button></Link>
        </div>
        
    </div>
  )  
}
