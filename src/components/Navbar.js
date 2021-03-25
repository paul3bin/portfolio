import React, { Component } from "react";
import Navitem from "./NavItem";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: "",
    };
  }

  activeitem = (x) => {
    if (this.state.NavItemActive.length > 0) {
      document
        .getElementById(this.state.NavItemActive)
        .classList.remove("active");
    }
    this.setState({ NavItemActive: x }, () => {
      document.getElementById(this.state.NavItemActive).classList.add("active");
    });
  };

  render() {
    return (
      <nav
        id="navbar"
        className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            EP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#home">
                <Navitem
                  item="Home"
                  className="nav-link"
                  tolink="/"
                  activec={this.activeitem}
                ></Navitem>
              </a>
              <a className="nav-link active" aria-current="page" href="#about">
                <Navitem
                  item="About"
                  tolink="/about"
                  activec={this.activeitem}
                ></Navitem>
              </a>
              <a
                className="nav-link active"
                aria-current="page"
                href="#projects"
              >
                <Navitem
                  item="Projects"
                  tolink="/Projects"
                  activec={this.activeitem}
                ></Navitem>
              </a>
              <a
                className="nav-link active"
                aria-current="page"
                href="#contact"
              >
                <Navitem
                  item="Contact"
                  tolink="/contact"
                  activec={this.activeitem}
                ></Navitem>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
