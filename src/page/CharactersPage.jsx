import axios from "axios";
import React, { useEffect, useState } from "react";
import "./characterpage.css";
import ListLanguage from "../components/ListLanguage"
import Navbar from "../components/Navbar"
import "../components/navbar.css"
import HomeButton from "../components/HomeButton";
import Search from "../components/Search";
import { CardCharacter } from "../components/CardCharacter";


export const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const res = await axios.get("https://api.got.show/api/show/characters/");
      console.log(res.data);
      setCharacters(res.data);
    };
    getCharacters();
  }, []);

  return (
    <>
    <Search />
    <HomeButton />
    <ListLanguage />
    <div className="box">
      <div className="busqueda__gallery">
    
      {characters.map((character) => (
        <CardCharacter character={character} key={character._id} />
      ))}  
      
     </div>
      <Navbar />
    </div>
    </>
  );
};
