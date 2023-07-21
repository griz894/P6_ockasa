import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const Rating = ({ rating }) => {
  const MAX_RATING = 5;
  const fullStarColor = '#ff6060'; // Couleur pour les étoiles pleines
  const emptyStarColor = '#e3e3e3'; // Couleur pour les étoiles vides

  const getStarIcon = (index) => {
    if (index < rating) {
      return <FontAwesomeIcon icon={solidStar} color={fullStarColor} />;
    } else {
      return <FontAwesomeIcon icon={regularStar} color={emptyStarColor} />;
    }
  };

  return (
    <div className='rating'>
      {Array.from({ length: MAX_RATING }, (_, index) => (
        <span key={index}>{getStarIcon(index)}</span>
      ))}
    </div>
  );
}

export default Rating;
