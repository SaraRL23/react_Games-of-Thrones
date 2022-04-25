import axios from "axios";
import React, { useEffect, useState } from "react";
import "./characterpage.css";
import ListLanguage from "../components/ListLanguage"
import Navbar from "../components/Navbar"
import "../components/navbar.css"
import HomeButton from "../components/HomeButton";

import { CardCharacter } from "../components/CardCharacter";



export const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [fCharacters, setFCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const res = await axios.get("https://api.got.show/api/show/characters/");
      console.log(res.data);
      setCharacters(res.data);
      setFCharacters(res.data);
    };
    getCharacters();
  }, []);

  const handleChange=e=>{
    filtrar(e.target.value);
  }
  const filtrar=(searchdata)=>{
    var fCharacter=fCharacters.filter((element)=>{
      if(element.name.toString().toLowerCase().includes(searchdata.toLowerCase())
      ){
        return element;
      }
      
    });
    setCharacters(fCharacter);
  }

  
 

  return (
    <>
   
    <HomeButton />
    <ListLanguage />
    <div className="box timeline-container">
    <div className="c-search">
      <img className="c-search__img" src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/15bd4fae-6df6-4fca-8e4a-4889bba7186c.svg" alt="" />
        <input
          className="c-search__button"
          placeholder="Buscar..."
          onChange={handleChange}
        />
      </div>
      <div className="busqueda__gallery"  >
    
      {characters.map((character) => (
        <CardCharacter character={character} key={character._id} />
      ))}  
      
     </div>
      <Navbar />
    </div>
    </>
  );
};


