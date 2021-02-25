import react from "react";
import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilePhoto from "../images/IMG_20180701_131632_HDR.jpg";
import Social from "../components/Social";

class Home extends Component {
  render() {
    document.title = "Ebin Paul | Home";
    return (
      <div className="condiv home">
        <img src={profilePhoto} className="profilepic"></img>

        <ReactTypingEffect
          className="typingeffect"
          text={["Hi, I am Ebin Paul", "I love building Web-Apps!"]}
          speed={100}
          eraseDelay={700}
        />
        <Social />
      </div>
    );
  }
}

export default Home;
