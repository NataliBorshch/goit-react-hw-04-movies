import React, { Component } from "react";
import { Route } from "react-router-dom";
import Form from "../components/Form";
import MoviesList from "../components/MoviesList";
import Servise from "../servise/serviseMovies";

class MoviesPage extends Component {
  state = {
    movies: [],
    searchMovie: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const { searchMovie } = this.state;
    if (searchMovie !== prevState.searchMovie) {
      this.getCollectionMovies(searchMovie);
    }
  }
  componentDidMount() {
    const value = this.props.location.search.slice(7);
    value && this.getCollectionMovies(value);
  }

  getCollectionMovies = (value) => {
    Servise.foundMovies(value).then((data) => {
      this.setState({ movies: [...data.results] });
    });
  };

  onSubmit = (query) => {
    const { history, location } = this.props;
    history.push({
      ...location,
      search: `?query=${query.trim()}`,
    });
    this.setState({ searchMovie: query });
  };

  render() {
    const { movies } = this.state;
    const { search } = this.props.history.location;
    return (
      <>
        <Form onSubmit={this.onSubmit} />
        {movies && (
          <Route
            to={`/movies?${search}`}
            render={(props) => {
              return <MoviesList {...props} movies={movies} />;
            }}
          />
        )}
      </>
    );
  }
}

export default MoviesPage;
