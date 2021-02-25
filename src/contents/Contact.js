import React, { Component } from "react";

import Social from "../components/Social";

class Contact extends Component {
  render() {
    document.title = "Ebin Paul | Contact";
    return (
      <div className="condiv">
        <h1 className="subtopic">Contact</h1>
        <h3>Email : ebinpaul@outlook.com</h3>
        <Social />
      </div>
    );
  }
}

export default Contact;
