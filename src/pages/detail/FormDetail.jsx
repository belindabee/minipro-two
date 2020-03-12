import React, { Component } from "react";
import "../../asset/style.css";

export default class FormDetail extends Component {
  render() {
    return (
      <div className="form">
        <div className="logo">
          <i className="fa fa-play"></i>
        </div>
        <div className="fullname">
          <h5>Fullname</h5>
          <input type="name" name="fullname" placeholder="" />
        </div>
        <div className="email">
          <h5>Email</h5>
          <input type="email" name="email" placeholder="" />
        </div>
        <div>
          <h5>password</h5>
          <input type="password" name="password" placeholder="" />
        </div>
        <div className="form-account">
          <h6>
            Already have a account?
            <butoon className="form-button">log in</butoon>
          </h6>
        </div>
        <button className="form-button1">Sign Up</button>
      </div>
    );
  }
}
