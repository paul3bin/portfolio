import React, { Component } from "react";

class Social extends Component {
  render() {
    return (
      <div className="social">
        <a
          href="https://www.linkedin.com/in/ebin-paul-a89309128/"
          target="_blank"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/paul3bin" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://twitter.com/paul_ebin" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
        <address>
          <a href="mailto:ebinpaul@outlook.com">
            <i class="fas fa-envelope"></i>
          </a>
        </address>
      </div>
    );
  }
}

export default Social;
