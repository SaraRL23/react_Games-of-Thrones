import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./charactersdetailpage.css";
import HomeButton from '../components/HomeButton';
import ListLanguage from '../components/ListLanguage'
import CardCharacterDetail from '../components/CardCharacterDetail';

export const CharactersDetailPage = () => {
  const urlGot = 'https://api.got.show/api/show/characters/'
  const [character, setCharacter] = useState([]);
  let {name} = useParams("");

  useEffect (() => {

    const getCharactersByName = async () =>{
      const res = await axios.get(`${urlGot}${name}`)
      console.log(res.data)
      setCharacter(res.data)
    };
    getCharactersByName();
  }, []);

  return (
    <div className='characterdetailpage'>
      <HomeButton />
     <ListLanguage />
    <CardCharacterDetail character={character}/>
    </div>
  )
}
