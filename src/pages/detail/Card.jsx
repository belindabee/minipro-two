import React, { Component } from "react";
import placeholder from "../../asset/placeholder.png";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <img
          src={this.props.image ? this.props.image : placeholder}
          alt={this.props.title}
        />
        <h4>{this.props.title}</h4>
        <p>{this.props.category}</p>
      </div>
    );
  }
}
