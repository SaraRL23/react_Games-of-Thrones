import React from 'react'
import { generatePath, Link } from 'react-router-dom'
import "./card.css"

export const Card = ({character}) => {
  return (
    // <Link to={generatePath("characters/:id", { id: character._id })}>
        <div className="gallery">
      <figure className='gallery_card' key={character._id} >
        <p className='gallery__text'>{character.name}</p>
        <img className='gallery__img' src={character.image} alt={character.name} />
      </figure>
      </div>
    // </Link>
  )
}
