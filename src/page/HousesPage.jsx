import React from 'react'
import HomeButton from '../components/HomeButton'
import ListLanguage from '../components/ListLanguage'
import Navbar from '../components/Navbar'
import {useState, useEffect} from "react";
import axios from 'axios';
import { CardHouse } from '../components/CardHouse';
import Search from '../components/Search';
// import { Link } from "react-router-dom";

export const HousesPage = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const getHouses = async () => {
      const res = await axios.get("https://api.got.show/api/show/houses/");
      console.log(res.data);
      setHouses(res.data);
    };
    getHouses();
  }, []);

  return (
    <>
    <Search />
    <HomeButton />
<ListLanguage />
    <div className="box">
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

