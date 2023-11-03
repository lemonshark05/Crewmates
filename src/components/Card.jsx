import React from 'react';

const Card = ({ id, name, speed, color, link }) => {
  return (
    <div className="crewmate-card" id={id}>
      <a href={link} style={{ color: 'white' }}>
        <img src="/assets/crewmate.ce385016.png" className="single-crewmate" height="150px" alt="Crewmate" />
        <h3>Name of Crewmate: <span>{name}</span></h3>
        <h3>Speed of Crewmate: <span>{speed} mph</span></h3>
        <h3>Color of Crewmate: <span>{color}</span></h3>
      </a>
      <a href={`${link}/edit`}>
        <button type="button">Edit Crewmate</button>
      </a>
    </div>
  );
};

export default Card;