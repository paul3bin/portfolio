import React, { Component } from "react";

import Resume from "../components/Resume";

class About extends Component {
  render() {
    document.title = "Ebin Paul | About";
    return (
      <div className="container">
        <div className="container">
          <h4>Hi,</h4>
          <h1>I'm Ebin Paul</h1>
          <h5>
            Graduate in Computer Science and Engineering. <br></br> I love{" "}
            Technology, Web Development and Data Science.
          </h5>
          <br></br>
          <p>
            <b>Work Experience: </b>
            <ul>
              <li>
                System Engineer at Infosys Ltd, Pune, Maharashtra (Nov'18 -
                Mar'20)
              </li>
            </ul>
            <b>Education:</b>
            <ul>
              <li>
                B.Tech in Computer Science and Engineering at Karunya Institute
                of Technology and Sciences, Coimbatore, Tamil Nadu (Jul'14 -
                Jun'18)
              </li>
            </ul>
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <b>CS Languages:</b>
              <ul>
                <li>Python</li>
                <li>SQL</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="col">
              <b>Frameworks:</b>
              <ul>
                <li>Django</li>
                <li>React</li>
              </ul>
            </div>
            <div className="col">
              <b>Spoken Languages:</b>
              <ul>
                <li>English</li>
                <li>Hindi</li>
                <li>Malayalam</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container resume">
          <Resume />
        </div>
      </div>
    );
  }
}

export default About;
