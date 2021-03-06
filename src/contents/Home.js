import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilePhoto from "../images/profile_image.jpeg";
import Social from "../components/Social";

class Home extends Component {
  render() {
    document.title = "Ebin Paul | Home";
    return (
      <div className="container">
        <div className="position-absolute top-0 start-50 translate-middle-x image-pos">
          <img src={profilePhoto} className="profilepic"></img>
        </div>
        <div className="position-absolute top-50 start-50 translate-middle type-pos">
          <ReactTypingEffect
            className="typingeffect fs-1"
            text={["Hi, I am Ebin Paul!", "I love building web-apps!"]}
            speed={130}
            eraseDelay={380}
          />
        </div>
        <div className="position-absolute bottom-0 start-50 translate-middle-x social-pos">
          <Social />
        </div>
      </div>
    );
  }
}

export default Home;
