import React, { Component } from "react";

class Social extends Component {
  render() {
    return (
      <div className="row social">
        <div className="col">
          <a
            href="https://www.linkedin.com/in/ebin-paul-a89309128/"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="col">
          <a href="https://github.com/paul3bin" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="col">
          <a href="https://twitter.com/paul_ebin" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div className="col">
          <a href="mailto:ebinpaul@outlook.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Social;
