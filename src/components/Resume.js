import React, { Component } from "react";

import resume from "../files/Resume-EbinPaul.pdf";

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <a href={resume} target="_blank">
          <i class="fas fa-file"> Resume</i>
        </a>
      </div>
    );
  }
}

export default Resume;
