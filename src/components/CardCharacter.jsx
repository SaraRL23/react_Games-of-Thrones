import React from 'react'
import { generatePath, Link } from 'react-router-dom'
import "./cardcharacter.css"

export const CardCharacter = ({character}) => {
  return (
    <>
    {character && character.image &&
     <Link to={generatePath("/characters/:name", { name: character.name })}>
        <div className="gallery">
      <figure className='gallery_card' key={character._id} >
        
        <img className='gallery__img' src={character.image} alt={character.name} />

           <p className='gallery__text'>{character.name}</p>
      </figure>
      </div>
     </Link>}
     </>
  )
}
