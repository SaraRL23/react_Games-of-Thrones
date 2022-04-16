import axios from "axios";
import React, { useEffect, useState } from "react";
import "./characterpage.css";
import ListLanguage from "../components/ListLanguage"
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"
import "../components/navbar.css"
import HomeButton from "../components/HomeButton";
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
    <HomeButton />
<ListLanguage />
    <div className="box">
      <div className="busqueda">
        
        {/* <span class="busqueda__search">
          <img className="busqueda__img" src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/15bd4fae-6df6-4fca-8e4a-4889bba7186c.svg" alt="lupa" />
          
          Buscar...</span>
          <Link to="/">
          <img className="busqueda__homeimg" src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/dbfeb53b-7b64-4e55-984b-6e3f413a161c.svg" alt="homelogo" />
          <ListLanguage/>
          </Link> */}
      </div>
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
