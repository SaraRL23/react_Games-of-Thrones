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
            <div className='characterdetail__list'>
                    {house && house.logoURL &&
                <ul className='characterdetail__text'> <h3 className='characterdetail__title-got'>{t("house")}</h3><img className='characterdetail__img-casa' src={house.logoURL} alt="" /></ul>
                    }
                <ul className='characterdetail__text'> <h3 className='characterdetail__title-got'>{t("allegiances")}</h3> {character.allegiances.map((allegiance) => (<li className='characterdetail__li'>{allegiance}</li>))}</ul>
                <ul className='characterdetail__text,  timeline-container-small'> <h3>{t("appearances")}</h3> {character.appearances.map((appearance) => (<li className='characterdetail__li'>{appearance}</li>))}</ul>
                {character.father &&
                <ul className='characterdetail__text'> <h3 className='characterdetail__title-got'>{t("father")}</h3>{character.father}</ul>
                }
                {character.siblings &&
                <ul className='characterdetail__text'> <h3 className='characterdetail__title-got'>{t("related")}</h3>{character.siblings.map((sibling) => (<li className='characterdetail__li'>{sibling}</li>))}</ul>
                }
                <ul className='characterdetail__text,  timeline-container-small'> <h3>{t("titles")}</h3>{character.titles.map((titles) => (<li className='characterdetail__li'>{titles}</li>))}</ul>
            </div>
        </div>

    </figure>}
    
    </>
  


)
}

export default CardCharacterDetail;