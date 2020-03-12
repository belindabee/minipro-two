import React, { Component } from "react";

export default class ListMovie extends Component {
  render() {
    return (
      <div className=" browse">
        <div className="category">
          <h3>Browse by Category</h3>
        </div>
        <div className="list-category">
          <ol className="name-category">
            <li>All</li>
            <li>Anime</li>
            <li>Actions</li>
            <li>Science Fiction</li>
            <li>Comedy</li>
          </ol>
        </div>
      </div>
    );
  }
}
