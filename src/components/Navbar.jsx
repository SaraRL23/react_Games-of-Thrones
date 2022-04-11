import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
      <nav className="navigator">
        <ul className="navigator-ul">
          <Link className="navigator-link" to="/characters">
            <li>PERSONAJES</li>
          </Link>
          <Link className="navigator-link"  to="/casas">
            <li>CASAS</li>
          </Link>
          <Link className="navigator-link"  to="/cronologia">
            <li>CRONOLOGIA</li>
          </Link>
        </ul>
        
      </nav>
    );
  };
  
  export default Navbar;