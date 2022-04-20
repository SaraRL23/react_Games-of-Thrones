
// import React from 'react'
// import "./search.css"

import axios from "axios";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";

// function Search() {
//   return (
//     <div className='c-search'>
//       <img className='c-search__img' src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/15bd4fae-6df6-4fca-8e4a-4889bba7186c.svg" alt="lupa_img" />
//     <input placeholder='Buscar...' className='c-search__button' type="text" />
//     </div>
//   )
// }

// export default Search
// SEARCH:
// export default function Cardinfo({character}){
//   const { t, i18n } = useTranslation("translation");
//   const changeLanguage = (code) =>{
//     i18n.changeLanguage(code);
//   };
// const [casa, setCasas]= useState({});

// useEffect(()=>{
//   axios({
//     url:`https://api.got.show/api/show/houses/${character.house}`,
//   })
//   .then((response)=>{
//     setCasas(response.data[0]);
//   })
//   .catch((error)=>{
//     console.log(error);
//   });
// }, [character.house, setCasas]);

// const [appearances, setAppearances] = useState ({});
// useEffect(()=>{
//   axios({
//     url: `https://api.got.show/api/show/characters/${character.appearances}`,
//   })
//   .then((response)=>{
//     setAppearances(response.data);
//   })
//   .catch((error)=>{
//     console.log(error);
//   });
// },[character.appearances, setAppearances]);

// return(
//   <div key={character.id}>
//     <Navbar/>

//     <figure className="b-section">

//       <img className="foto" src={character.image} alt=""/>
//       <h2 className="nombre">{character.name}</h2>
//     </figure>
//     <div className="toda-seccion">
//     <figure>
//       <h3>{t("house")}</h3>
//       {casa && <img className="logo-casa" src={casa.logoURL} alt=""/>}
//       <p>{character.house}</p>
//     </figure>
//   </div>
// )

// }
