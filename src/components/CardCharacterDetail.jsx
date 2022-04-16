import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./cardcharacterdetail.css"

const CardCharacterDetail = ({character}) => {
    const urlHouse = 'https://api.got.show/api/show/houses/'
    const [house, setHouse] = useState({});
   let houseName = character.house
   
    // useEffect (() =>{

    //     const getHouse = async () => {
    //         const res = await axios.get (`${urlHouse}/${houseName}`);
    //         setHouse(res.data)

    //     };
    //     getHouse();
    // }, []); 

    useEffect (() => {
        axios({
            url: `${urlHouse}/${houseName}`
        })
        .then((response) => {
            setHouse(response.data[0]);
        });
    }, [houseName, setHouse]);
    
  return (
            <>
            {character.image &&
        <figure className='characterdetail'>
            
            <img className='characterdetail__img' src={character.image} alt={character.name} />
            <figcaption key={character.id} className='characterdetail__title'>{character.name}</figcaption>
            <div>
                <ul className='characterdetail__list'>
                        {house && house.logoURL &&
                    <li className='characterdetail__text'> <h3>House</h3><img className='characterdetail__img-casa' src={house.logoURL} alt="" /></li>
                        }
                    <li className='characterdetail__text'> <h3>Alianzas</h3> {character.allegiances}</li>
                    <li className='characterdetail__text'> <h3>Apariciones</h3>{character.appearances} </li>
                    {character.father &&
                    <li className='characterdetail__text'> <h3>Padre</h3>{character.father} </li>
                    }
                    {character.siblings &&
                    <li className='characterdetail__text'> <h3>Descendientes</h3>{character.siblings}</li>
                    }
                    <li className='characterdetail__text'> <h3>Titulos</h3>{character.titles} </li>
                </ul>
            </div>

        </figure>}
        
        </>
      


  )
}

export default CardCharacterDetail;