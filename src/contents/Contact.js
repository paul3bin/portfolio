import React, { Component } from "react";

import Social from "../components/Social";

class Contact extends Component {
  render() {
    document.title = "Ebin Paul | Contact";
    return (
      <div className="container">
        <h1 className="subtopic">Contact</h1>
        <h3>Email : ebinpaul@outlook.com</h3>
        <div className="position-absolute bottom-0 start-50 translate-middle-x social-pos">
          <Social />
        </div>
      </div>
    );
  }
}

export default Contact;
