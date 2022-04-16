import React from "react";
import { Link } from "react-router-dom";
import "./navbarcharacters.css";

const NavbarCharacters = () => {
    return (
      <nav className="navcharacters">
        <ul className="navcharacters__container">
         
            <span className="navcharacters__text" >
               <Link to="/characters">
              PERSONAJES
               </Link>
              </span>
          <span className="navcharacters__text">
                <Link to="/casas">
              CASAS
              </Link>
              </span>
          <span className="navcharacters__text">    
               <Link to="/cronologia">
              CRONOLOGIA
               </Link>
              </span>
         
        </ul>
        
      </nav>
    );
  };
  
  export default NavbarCharacters;