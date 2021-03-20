import React, { Component } from "react";
import "./Form.scss";

class Form extends Component {
  state = {
    query: "",
  };
  handleInput = (e) => {
    this.setState({ query: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.reset();
  };

  reset = () => {
    this.setState({ query: "" });
  };

  render() {
    return (
      <div className="box-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search movies"
            value={this.state.query}
            onChange={this.handleInput}
          />
          <button type="submit" className="btn-form">
            Send movies
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
