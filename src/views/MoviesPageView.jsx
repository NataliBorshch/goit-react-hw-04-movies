import React, { Component } from "react";
import { Route } from "react-router-dom";
import Form from "../components/Form";
import MoviesList from "../components/MoviesList";
import Servise from "../servise/serviseMovies";

class MoviesPage extends Component {
  state = {
    query: "",
    movies: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      this.getCollectionMovies(this.state.query);
    }
  }

  getCollectionMovies = (value) => {
    Servise.foundMovies(value).then((data) => {
      this.setState({ movies: [...data.results] });
    });
  };
  componentDidMount() {
    const query = localStorage.getItem("query");
    query && this.getCollectionMovies(query);
  }

  onSubmit = (query) => {
    const { history, location } = this.props;
    localStorage.setItem("query", `${query}`);
    history.push({
      ...location,
      search: `query=${query.trim()}`,
    });
    this.setState({ query });
  };

  render() {
    const { movies, query } = this.state;
    return (
      <>
        <Form onSubmit={this.onSubmit} />
        {movies && (
          <Route
            to={`/movies?query=${query}`}
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
