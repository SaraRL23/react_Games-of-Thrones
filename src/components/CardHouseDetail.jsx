import React from 'react'
import "./cardhousedetail.css"

export const CardHouseDetail = ({house}) => {
  return (
  <>
{ house.name && 
  <img className="house" src={house.logoURL} alt='logoURL'/>}
   <figcaption key={house.id} className='housedetail__title'>{house.name}</figcaption>
  {/* <h2>{house.name}</h2> */}
  <div>
                <ul className='housedetail__list'>
                    <li className='housedetail__text'> <h3>LEMA</h3> {house.words}</li>
                    <li className='housedetail__text'> <h3>SEDE</h3>{house.seat} </li>
                    <li className='housedetail__text'> <h3>REGION</h3>{house.region} </li>
                    <li className='housedetail__text'> <h3>ALIANZAS</h3>{house.allegiance}</li>
                    <li className='housedetail__text'> <h3>RELIGIONES</h3>{house.religion} </li>
                    <li className='housedetail__text'> <h3>FUNDACION</h3>{house.createdAt} </li>
                </ul>
            </div>
  </>
  )
}
