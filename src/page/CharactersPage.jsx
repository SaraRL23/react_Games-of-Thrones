import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import "./characterpage.css"

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
    <div className="box">
      <div>
      <input className="search" type="text" />
      </div>
      {characters.map((character) =>(
      <Card character={character} key={character._id}/>
      ))}
    </div>
  );
};
