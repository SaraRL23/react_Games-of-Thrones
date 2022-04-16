import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import CardCharacterDetail from '../components/CardCharacterDetail';
import "./charactersdetailpage.css";
import HomeButton from '../components/HomeButton';
import ListLanguage from '../components/ListLanguage'
import BackButton from  '../components/BackButton'

export const CharactersDetailPage = () => {
  const urlGot = 'https://api.got.show/api/show/characters/'
  const [character, setCharacter] = useState([]);
  let {name} = useParams("name");


  useEffect (() => {

    const getCharactersByName = async () =>{
      const res = await axios.get(`${urlGot}${name}`)
      setCharacter(res.data)
      console.log(res.data, "esto es el detalle")
    };
    getCharactersByName();
  }, []);

  return (
    <div className='characterdetailpage'>
      <Link to="/characters"><BackButton />
      </Link>
      <HomeButton />
     <ListLanguage />
    <CardCharacterDetail character={character}/>
    </div>
  )
}
