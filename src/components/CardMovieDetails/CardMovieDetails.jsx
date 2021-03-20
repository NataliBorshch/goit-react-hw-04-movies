import React from "react";
import PropTypes from "prop-types";
import "./CardMovieDetails.scss";
const shortid = require("shortid");

const CardMovieDetails = ({ movie }) => {
  const fullUrlImage = `https://image.tmdb.org/t/p/w500`;
  return (
    <>
      <div className="box-movie">
        <img
          className="big-poster"
          src={
            movie.backdrop_path
              ? `${fullUrlImage}${movie.backdrop_path}`
              : movie.poster_path
              ? `${fullUrlImage}${movie.poster_path}`
              : `https://ik.imagekit.io/s2fpg15d4rx/depositphotos_144011369-stock-photo-popcorn-and-movie-clapper-board_G9Nbh-ef0_9M.jpg`
          }
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
  movie: PropTypes.object.isRequired,
};

export default CardMovieDetails;
