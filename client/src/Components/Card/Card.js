import React from 'react'

export default function Card({id, name, image , continent} ) {
  return (
    
    <div>

        <h2>{id}</h2>
        
        <img src={image} alt='img not found' height='200px' width='250px' />

        <h3>{name}</h3>

        <h4>{continent}</h4>

    </div>
  )
}
