import React from "react";
import PropTypes from "prop-types";
import "./CardMovieDetails.scss";
const shortid = require("shortid");

const CardMovieDetails = ({ movie }) => {
  return (
    <>
      <div className="box-movie">
        <img
          className="big-poster"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title}
        />
        <div className="about-movie">
          <h3 className="prod-countries">production countries</h3>
          <ul>
            {movie.production_countries.map((elem) => {
              return <li key={shortid.generate()}> {elem.name}</li>;
            })}
          </ul>
          <h3>genre</h3>
          <ul>
            {movie.genres.map((genre) => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
          </ul>
          <h3>production companies</h3>
          <ul>
            {movie.production_companies.map((compani) => {
              return <li key={compani.id}>{compani.name}</li>;
            })}
          </ul>
          <div>
            <span>
              <h3>overview</h3>
              <p>{movie.overview}</p>
            </span>
            <span>
              <h3>budget</h3>
              <p>{movie.budget}$</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

CardMovieDetails.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      backdrop_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      production_countries: PropTypes.arrayOf.isRequired,
      genres: PropTypes.arrayOf.isRequired,
      production_companie: PropTypes.arrayOf.isRequired,
      overview: PropTypes.string.isRequired,
      budget: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CardMovieDetails;
