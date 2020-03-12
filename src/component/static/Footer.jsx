import React, { Component } from "react";
import android from "../../asset/android.png";
import apple from "../../asset/apple.svg";
import facebook from "../../asset/facebook.png";
import pinterest from "../../asset/pinterest.png";
import instagram from "../../asset/instagram.png";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="footer-row">
            <div className="footer-column footer-info">
              <div className="wrapper">
                <div className="logo-1">
                  <i className="fa fa-play"></i>
                </div>
                <span>Belinda Tv</span>
              </div>
              <h5>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </h5>
            </div>
            <div className="footer-column footer-1">
              <ul>
                <li>Tentang Kami</li>
                <li>Blog</li>
                <li>Layanan</li>
                <li>Karir</li>
                <li>Pusat Media</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
