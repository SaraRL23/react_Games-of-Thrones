import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./cardcharacterdetail.css"

const CardCharacterDetail = ({character}) => {  
    const [house, setHouse] = useState({});

    useEffect(() => {
      axios({
          url: `https://api.got.show/api/show/houses/${character.house}`
      })
      .then((res) => {
          setHouse(res.data[0]);
      })
      .catch((error) => {
          console.log(error);
      });
    
     
    },[character.house, setHouse])
    
  return (
        <>
        {character &&
        <figure className='characterdetail'>
            
            <img className='characterdetail__img' src={character.image} alt={character.name} />
            <figcaption key={character.id} className='characterdetail__title'>{character.name}</figcaption>
            <div>
                <ul className='characterdetail__list'>
                    {house.logoURL &&
                    <li><h3>CASA</h3><img src={house.logoURL} alt="logo house" /></li>
                    }

                    <li className='characterdetail__text'> <h3>Alianzas</h3> {character.allegiances}</li>
                    <li className='characterdetail__text'> <h3>Apariciones</h3>{character.appearances} </li>
                    <li className='characterdetail__text'> <h3>Padre</h3>{character.father} </li>
                    <li className='characterdetail__text'> <h3>Descendientes</h3>{character.siblings}</li>
                    <li className='characterdetail__text'> <h3>Titulos</h3>{character.titles} </li>
                </ul>
            </div>

        </figure>
        
        }
        </>


  )
}

export default CardCharacterDetail