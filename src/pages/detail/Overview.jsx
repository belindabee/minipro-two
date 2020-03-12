import React, { Component } from "react";
import banner from "../../asset/banner.jpg";

export default class Overview extends Component {
  render() {
    return (
      <div>
        <div className="overview">
          <img src={banner} alt="gambar" />
        </div>
      </div>
    );
  }
}
