import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation(["translation"]);
    return (
      <nav className="navigator">
        <ul className="navigator-ul">
        <Link className="navigator-link" to="/characters">
            <li>{t("characters")}</li>
          </Link>
          <Link className="navigator-link"  to="/houses">
            <li>{t("houses")}</li>
          </Link>
          <Link className="navigator-link"  to="/cronologia">
            <li>{t("cronology")}</li>
          </Link>
        </ul>
        
      </nav>
    );
  };
  
  export default Navbar;