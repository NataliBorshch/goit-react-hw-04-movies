import React from "react";
import PropTypes from "prop-types";
import "./Actor.scss";
const Actor = ({ id, name, character, profile }) => {
  return (
    <li id={id} className="actor-card">
      <img src={profile} alt={name} />
      <p className="name-actor"> {name}</p>
      <p className="character">{character}</p>
    </li>
  );
};

Actor.defaultProp = {
  profile: "https://ik.imagekit.io/s2fpg15d4rx/No-photo-m_jpq4G-STh.png",
};

Actor.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  profile: PropTypes.string,
};

export default Actor;
