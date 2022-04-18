import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./cardcharacterdetail.css";
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';


const CardCharacterDetail = ({character}) => {  
    const [house, setHouse] = useState({});
    const { t, i18n } = useTranslation(["translation"]);

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
        {character.image &&
    <figure className='characterdetail'>
        
        <img className='characterdetail__img' src={character.image} alt={character.name} />
        <figcaption key={character.id} className='characterdetail__title'>{character.name}</figcaption>
        <div>
            <ul className='characterdetail__list'>
                    {house && house.logoURL &&
                <li className='characterdetail__text'> <h3>{t("house")}</h3><img className='characterdetail__img-casa' src={house.logoURL} alt="" /></li>
                    }
                <li className='characterdetail__text'> <h3>{t("allegiances")}</h3> {character.allegiances}</li>
                <li className='characterdetail__text'> <h3>{t("appearances")}</h3>{character.appearances} </li>
                {character.father &&
                <li className='characterdetail__text'> <h3>{t("father")}</h3>{character.father}</li>
                }
                {character.siblings &&
                <li className='characterdetail__text'> <h3>{t("related")}</h3>{character.siblings}</li>
                }
                <li className='characterdetail__text'> <h3>{t("titles")}</h3>{character.titles} </li>
            </ul>
        </div>

    </figure>}
    
    </>
  


)
}

export default CardCharacterDetail;