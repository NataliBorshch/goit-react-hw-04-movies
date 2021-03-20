import React from "react";
import PropTypes from "prop-types";
import "./MovieCard.scss";

const MovieCard = ({ item }) => {
  const fullUrlImage = `https://image.tmdb.org/t/p/w500`;
  return (
    <>
      <img
        className="poster"
        src={
          item.poster_path
            ? `${fullUrlImage}${item.poster_path}`
            : "https://ik.imagekit.io/s2fpg15d4rx/depositphotos_13867533-stock-photo-movie-clapper-board-3d-glasses_9Xn7kWOqZ.jpg"
        }
        alt={item.title}
      />
      <div className="text-card">
        <h2>{item.title}</h2>
        <p>{item.release_date}</p>
      </div>
    </>
  );
};

MovieCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MovieCard;
