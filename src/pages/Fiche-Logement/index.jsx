import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./logement.scss";
import data from "./../../datas/data.json";
import Carousel from "../../components/carousel";
import Collapse from "../../components/collapse";
import Rating from "../../components/rating";

const FicheLogement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const foundLogement = data.find((logement) => logement.id === id);
    setLogement(foundLogement);
  }, [id]);

  if (!logement) return <div>Chargement...</div>;

  const renderEquipments = () => (
    <ul>
      {logement.equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
      ))}
    </ul>
  );

  const renderTags = () => (
    <>
      {logement.tags.map((tag, index) => (
        <p key={index}>{tag}</p>
      ))}
    </>
  );


  return (
    <div className="fiche-logement">
      <div className="carouselContainer">
        <Carousel images={logement.pictures} />
      </div>
      <div className="logementWrapper">
        <div className="logementTitle">
          <h2>{logement.title}</h2>
          <p>{logement.location}</p>
        </div>
        <div className="hostCard">
          <h3>{logement.host.name}</h3>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>

      <div className="tagRating">
        <div className="tag">{renderTags()}</div>
        <Rating rating={logement.rating} />
      </div>
      <div className="collapseLogement">
        <div className="collapseDescription">
          <Collapse title="Description">
            <p>{logement.description}</p>
          </Collapse>
        </div>
        <div className="collapseEquipements">
          <Collapse title="Équipements">{renderEquipments()}</Collapse>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FicheLogement;
