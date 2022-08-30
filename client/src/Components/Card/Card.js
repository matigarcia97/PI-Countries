import React from 'react'
import '../Card/Card.css'

export default function Card({id, name, image , continent} ) {
  return (
    
    <div>

      <img className="image" src={image} alt='img not found' height='200px' width='282px' />
      
      <h2 className='name'>{name}</h2>
       
      <h4 className='continent'>{continent}</h4>

    </div>
  )
}
