
import React from "react";
import { Link } from "react-router-dom";
import "./list.css";
import i18n from "i18next";
import {useTranslation} from "react-i18next";



const ListLanguage = () => {
  const { t, i18n }= useTranslation(["translation"]);
  const changeLanguage = (code)=>{
   i18n.changeLanguage(code)
  };

  return (
      <ul className="flags">
        <img src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/83cd13fd-5b9b-4894-8846-fb2acd69cd04.svg" alt="español logo" onClick={()=>changeLanguage("es")} />
        <img src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/84d2508e-84cb-4ffc-b238-18246c38f2bf.svg" alt="english logo" onClick={()=>changeLanguage("en")} />
      </ul>
  );
};
export default ListLanguage;