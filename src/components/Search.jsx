
import React, { useState } from 'react'
import "./search.css"

import axios from "axios";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";


export default function Cardinfo({character}){
  const { t, i18n } = useTranslation("translation");
  const changeLanguage = (code) =>{
    i18n.changeLanguage(code);
  };
const [casa, setCasas]= useState({});

useEffect(()=>{
  axios({
    url:`https://api.got.show/api/show/houses/${character.house}`,
  })
  .then((response)=>{
    setCasas(response.data[0]);
    console.log(response);
  })
  .catch((error)=>{
    console.log(error);
  });
}, [character.house, setCasas]);

const [appearances, setAppearances] = useState ({});
useEffect(()=>{
  axios({
    url: `https://api.got.show/api/show/characters/${character.appearances}`,
  })
  .then((response)=>{
    setAppearances(response.data);
  })
  .catch((error)=>{
    console.log(error);
  });
},[character.appearances, setAppearances]);

return(
  <div key={character.id}>
    <Navbar/>

    <figure className="b-section">

      <img className="foto" src={character.image} alt=""/>
      <h2 className="nombre">{character.name}</h2>
    </figure>
    <div className="toda-seccion">
    <figure>
      <h3>{t("house")}</h3>
      {casa && <img className="logo-casa" src={casa.logoURL} alt=""/>}
      <p>{character.house}</p>
    </figure>
  </div>
  </div>
)

}
