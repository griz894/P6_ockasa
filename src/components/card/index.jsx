import React from "react";
import { Link } from 'react-router-dom';
import "./Card.scss";

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/fiche-logement/${id}`}>
      <div className="card">
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </div>
    </Link>
  );
};

export default Card;
