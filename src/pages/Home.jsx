import React, { Component } from "react";
import ImageSlider from "../component/ImageSlider";
import { getAllMovies } from "../api/Index";
import ListMovie from "./detail/ListMovie";
import Card from "./detail/Card";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
    getAllMovies().then(res => {
      const movies = res.data.data.docs;

      this.setState({
        movies: movies
      });
    });
  }
  render() {
    return (
      <div>
        <ImageSlider />
        <ListMovie />
        {this.state.movies.map(movie => (
          <Card
            image={movie.image}
            title={movie.title}
            category={movie.category}
          />
        ))}
      </div>
    );
  }
}
