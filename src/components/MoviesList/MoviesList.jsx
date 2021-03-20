import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MovieCard from "../MovieCard";
import "./MoviesList.scss";

const MoviesList = ({ movies, location }) => {
  return (
    <ul className="movies-list">
      {movies.map((movie) => {
        return (
          <li key={movie.id} className="movie-card">
            <NavLink
              exact
              to={{
                pathname: `/movies/${movie.id}`,
                state: {
                  from: location,
                },
              }}
            >
              <MovieCard item={movie} />
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      movie: PropTypes.arrayOf.isRequired,
    })
  ).isRequired,
};

export default withRouter(MoviesList);
