import React, { Component } from "react";
import Servise from "../../servise/serviseMovies";
import "./Reviews.scss";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    console.log(this.props.id);
    Servise.getReviewMovies(this.props.id).then((data) => {
      console.log(data);
      this.setState({ reviews: [...data.results] });
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.reviews.length > 0
            ? this.state.reviews.map((ele) => {
                return (
                  <li key={ele.id} className="review-item">
                    <p className="name-autor">{ele.author}</p>
                    <p className="content">{ele.content}</p>
                  </li>
                );
              })
            : "We don`t have reviews"}
        </ul>
      </div>
    );
  }
}

export default Reviews;
