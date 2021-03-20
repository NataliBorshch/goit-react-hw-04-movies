import React, { Component } from "react";
import Servise from "../servise/serviseMovies";
import CardMovieDetails from "../components/CardMovieDetails";
import Cast from "../components/Cast";
import Reviews from "../components/Reviews";
import { NavLink, Route } from "react-router-dom";
import routes from "../routes";

class MovieDetails extends Component {
  state = {
    movie: {},
  };

  componentDidMount() {
    const id = Number(this.props.match.params.movieId);

    Servise.detailMovies(id).then((data) => {
      this.setState({ movie: { ...data } });
    });
  }

  handleBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };
  render() {
    const key = Object.keys(this.state.movie).length;
    const { movie } = this.state;
    const { match } = this.props;

    return (
      <>
        <button className="btn-back" onClick={this.handleBack}>
          come back
        </button>
        <div>{key > 0 && <CardMovieDetails movie={movie} />}</div>
        <div>
          <h3>addition informations</h3>
          <ul>
            <li>
              <NavLink
                to={`${match.url}/cast`}
                className="info-link"
                activeClassName="info-link-activ"
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${match.url}/reviews`}
                className="info-link"
                activeClassName="info-link-activ"
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <Route
            exact
            path={`${match.url}/cast`}
            render={(props) => {
              return <Cast {...props} id={match.params.movieId} />;
            }}
          />

          <Route
            exact
            path={`${this.props.match.url}/reviews`}
            render={(props) => {
              return movie && <Reviews {...props} id={match.params.movieId} />;
            }}
          />
        </div>
      </>
    );
  }
}

export default MovieDetails;
