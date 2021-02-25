import React, { Component } from "react";

import Resume from "../components/Resume";

class About extends Component {
  render() {
    document.title = "Ebin Paul | About";
    return (
      <div className="condiv">
        <h4>Hi,</h4>
        <h1>I'm Ebin Paul</h1>
        <h4>
          Graduate in Computer Science and Engineering <br></br> and I'm
          interested in <u>Web Development</u> and <u>Data Science</u>.
        </h4>
        <br></br>
        <p>
          <b>Work Experience: </b>
          <ul>
            <li>
              System Engineer Trainee at Infosys Ltd, Mysore, Karnataka (Nov'18
              - Mar'19)
            </li>
            <li>
              System Engineer at Infosys Ltd, Pune, Maharashtra (Mar'19 -
              Mar'20)
            </li>
          </ul>
          <br></br>
          <b>Education:</b>
          <ul>
            <li>
              B.Tech in Computer Science and Engineering at Karunya Institute of
              Technology and Sciences, Coimbatore, Tamil Nadu
            </li>
          </ul>
        </p>
        <Resume />
      </div>
    );
  }
}

export default About;
