import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import image1 from "../asset/iamge1.png";
import image2 from "../asset/image2.png";

export default class ImageSlider extends Component {
  render() {
    const images = [image1, image2];
    return (
      <Carousel
        showThumbs={false}
        autoPlay={true}
        showStatus={false}
        showArrows={true}
        infiniteLoop={true}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="gambar" />
          </div>
        ))}
      </Carousel>
    );
  }
}
