import React, { Component } from "react";
import Modal from "react-responsive-modal";
import FormDetail from "../../pages/detail/FormDetail";

export default class Navbar extends Component {
  state = {
    open: false
  };

  openModal = () => {
    this.setState({
      open: true
    });
  };

  closeModal = () => {
    this.setState({
      open: false
    });
  };
  render() {
    const open = this.state.open;
    return (
      <div className="nav-container">
        <div className="nav">
          <div className="nav-logo">
            <i className="fa fa-play"></i>
          </div>
          <span>Belinda Tv</span>
          <input name="search" placeholder="seacrh moavie.." />
          <div className="nav-signin" onClick={this.openModal}>
            Sign in
          </div>
          <Modal open={open} onClose={this.closeModal} center>
            <FormDetail />
          </Modal>
        </div>
      </div>
    );
  }
}
