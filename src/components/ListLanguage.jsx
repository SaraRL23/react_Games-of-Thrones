import React from "react";
import { Link } from "react-router-dom";
import "./list.css";

const ListLanguage = () => {
  return (
      <ul>
        <Link to="/español">
        <img src="" alt="español logo" />
        </Link>
        <Link to="/english">
        <img src="" alt="english logo" />
        </Link>
      </ul>
  );
};
export default ListLanguage;