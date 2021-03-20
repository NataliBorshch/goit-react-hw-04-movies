import React, { Component, Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AppBar from "./components/AppBar";
import Container from "./components/Container";
import Spinner from "./components/Spinner/Spiner";
import routes from "./routes";

const HomePage = lazy(() =>
  import("./views/HomePageView" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPageView" /* webpackChunkName: "movies-page" */)
);
const MovieDetails = lazy(() =>
  import(
    "./views/MovieDetailsPageView" /* webpackChunkName: "movieDetais-page" */
  )
);

class App extends Component {
  render() {
    return (
      <>
        <AppBar />
        <Container>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path={routes.home} component={HomePage} />
              <Route exact path={routes.movies} component={MoviesPage} />
              <Route path={routes.movieDetails} component={MovieDetails} />
              <Redirect to="/" />
            </Switch>
          </Suspense>
        </Container>
      </>
    );
  }
}

export default App;
