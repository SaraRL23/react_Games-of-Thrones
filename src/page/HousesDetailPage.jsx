import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import HomeButton from '../components/HomeButton';
import ListLanguage from '../components/ListLanguage'
import { CardHouseDetail } from '../components/CardHouseDetail';
import BackButton from '../components/BackButton'

import '../components/cardhousedetail.css'

export const HousesDetailPage = () => {
  const urlHouse = 'https://api.got.show/api/show/houses/'
  const [house, setHouse] = useState([]);
  let {name} = useParams("");

  useEffect (() => {

    const getHouseByName = async () =>{
      const res = await axios.get(`${urlHouse}${name}`)
      console.log(res.data, "esto es el detalle")
      setHouse(res.data[0])
    };
    getHouseByName();
  }, [name]);

  return (
    <div className='title'>
      
      <ListLanguage />
      <HomeButton />
      <Link to="/houses">
      <BackButton />
      </Link>
     
    <CardHouseDetail house={house}/>
   
    </div>
  )
}