import React, { Component } from "react";
import Actor from "./Actor/Actor";
import Servise from "../../servise/serviseMovies";
import "./Cast.scss";

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    Servise.getMoviesActors(this.props.id).then((data) => {
      this.setState({ cast: [...data.cast] });
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.cast.map((elem) => {
            return (
              <Actor
                key={elem.key}
                id={elem.id}
                name={elem.name}
                character={elem.character}
                profile={
                  elem.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${elem.profile_path}`
                    : "https://ik.imagekit.io/s2fpg15d4rx/No-photo-m_jpq4G-STh.png"
                }
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Cast;
