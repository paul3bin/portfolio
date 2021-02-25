import React, { Component } from "react";

class Cards extends Component {
  render() {
    return (
      <div class="card text-center text-dark bg-light mb-3">
        <div class="card-body">
          <h5 class="card-title">{this.props.title}</h5>
          <p class="card-text">{this.props.description}</p>
          <a href={this.props.link} class="btn btn-primary" target="_blank">
            {this.props.link_content}
          </a>
        </div>
      </div>
    );
  }
}

export default Cards;
