import React from 'react'
import HomeButton from '../components/HomeButton'
import ListLanguage from '../components/ListLanguage'
import Navbar from '../components/Navbar'
import {useState, useEffect} from "react";
import axios from 'axios';
import { CardHouse } from '../components/CardHouse';
import Search from '../components/Search';


export const HousesPage = () => {
  const [houses, setHouses] = useState([]);
  const [fHouses, setFHouses] = useState([]);
  const [searchData, setSearchData] = useState("");
  useEffect(() => {
    const getHouses = async () => {
      const res = await axios.get("https://api.got.show/api/show/houses/");
      console.log(res.data);
      setFHouses(res.data)
      setHouses(res.data);
    };
    getHouses();
  }, []);

  const handleChange=e=>{
    filtrar(e.target.value)
  }
  const filtrar=(searchdata)=>{
    var fHouse=fHouses.filter((element)=>{
      if(element.name.toString().toLowerCase().includes(searchdata.toLowerCase())
      ){
        return element;
      }
    });
    setHouses(fHouse);
  }




  return (
    <>
    
    <HomeButton />
<ListLanguage />
    <div className="box">
    <div className="c-search">
      <img className="c-search__img" src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/15bd4fae-6df6-4fca-8e4a-4889bba7186c.svg" alt="" />
        <input
          className="c-search__button"
          
        
          placeholder="Buscar..."
          onChange={handleChange}
        />
      </div>
      <div className="busqueda">
      </div>
      <div className="busqueda__gallery">
      {houses.map((house) => (
        <CardHouse house={house} key={house._id} />
      ))}
     </div>
      <Navbar />
    </div>
    </>
  );
};

