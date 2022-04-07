import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
      <nav>
        <ul className="text-menu">
          <Link to="/characters">
            <span className="personajes Text-Style-3" >PERSONAJES</span>
          </Link>
          <Link to="/casas">
            <span className="casas Text-Style-3">CASAS</span>
          </Link>
          <Link to="/cronologia">
            <span className="Cronologia Text-Style-3">CRONOLOGIA</span>
          </Link>
        </ul>
        
      </nav>
    );
  };
  
  export default Navbar;