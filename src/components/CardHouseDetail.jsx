import { t } from 'i18next'
import React from 'react'
import "./cardhousedetail.css";
import { useTranslation } from "react-i18next";


export const CardHouseDetail = ({house}) => {
  const { t, i18n } = useTranslation(["translation"]);
  return (
  <>
{ house.name && 
  <img className="house" src={house.logoURL} alt='logoURL'/>}
   <figcaption key={house.id} className='housedetail__title'>{house.name}</figcaption>
  {/* <h2>{house.name}</h2> */}
  <div>
                <ul className='housedetail__list'>
                    <li className='housedetail__text'> <h3>{t("words")}</h3> {house.words}</li>
                    <li className='housedetail__text'> <h3>{t("seat")}</h3>{house.seat} </li>
                    <li className='housedetail__text'> <h3>{t("region")}</h3>{house.region} </li>
                    <li className='housedetail__text'> <h3>{t("allegiances")}</h3>{house.allegiance}</li>
                    <li className='housedetail__text'> <h3>{t("religion")}</h3>{house.religion} </li>
                    <li className='housedetail__text'> <h3>{t("fundation")}</h3>{house.createdAt} </li>
                </ul>
            </div>
  </>
  )
}
