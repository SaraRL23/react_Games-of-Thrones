import React from "react";
import { Link } from "react-router-dom";
import "./list.css";

const ListLanguage = () => {
  return (
      <ul className="flags">
        <Link className="ancord" to="/español">
        <img src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/83cd13fd-5b9b-4894-8846-fb2acd69cd04.svg" alt="español logo" />
        </Link>
        <Link className="ancord" to="/english">
        <img src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/84d2508e-84cb-4ffc-b238-18246c38f2bf.svg" alt="english logo" />
        </Link>
      </ul>
  );
};
export default ListLanguage;