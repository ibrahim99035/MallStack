import React from 'react';
import '../../CSS/Card.css';

const Card = React.memo(({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" loading="lazy" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
});

export default Card;