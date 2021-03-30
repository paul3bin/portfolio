import React, { Component } from "react";

class Cards extends Component {
  render() {
    return (
      <div class="card text-center text-dark bg-light mb-3">
        <div class="card-body">
          <h5 class="card-title">{this.props.title}</h5>
          <p class="card-text">{this.props.description}</p>
          <div className="d-flex justify-content-evenly">
            <a
              href={this.props.link}
              class="btn btn-outline-primary"
              target="_blank"
            >
              Live Project
            </a>
            <a
              href={this.props.github}
              class="btn btn-outline-dark"
              target="_blank"
            >
              GitHub-Repo
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
