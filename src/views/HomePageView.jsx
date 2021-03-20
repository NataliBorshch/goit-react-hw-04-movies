import React, { Component } from "react";
import MoviesList from "../components/MoviesList";
import Servise from "../servise/serviseMovies";

class HomePage extends Component {
  state = {
    page: 1,
    movies: [],
  };

  componentDidMount() {
    Servise.getPopularMovies().then((data) => {
      this.setState({ movies: [...data.results] });
    });
  }

  render() {
    return <MoviesList movies={this.state.movies} />;
  }
}

export default HomePage;
