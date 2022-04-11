import React from 'react'
import { generatePath, Link } from 'react-router-dom'
import "./card.css"

export const Card = ({character}) => {
  return (
     <Link to={generatePath("/characters/:name", { name: character.name })}>
        <div className="gallery">
      <figure className='gallery_card' key={character._id} >
     
        <img className='gallery__img' src={character.image} alt={character.name} />
           <p className='gallery__text'>{character.name}</p>
      </figure>
      </div>
     </Link>
  )
}
