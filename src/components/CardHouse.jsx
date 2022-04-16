import React from 'react';
import { generatePath, Link } from 'react-router-dom'


export const CardHouse = ({house}) => {
    return (
      <>
      {house.logoURL && (
         
       <Link to={generatePath("/houses/:name", { name: house.name })}>
          <div className="gallery">
        <figure className='gallery_card' key={house._id} >
          <img className='gallery__img' src={house.logoURL} alt={house.name} />
             <p className='gallery__text'>{house.name}</p> 
        </figure>
        </div>
       </Link>
        )}
        </>
    )
  }
