import React, { Component } from "react";

import Cards from "../components/Card";

class Projects extends Component {
  render() {
    document.title = "Ebin Paul | Projects";
    return (
      <div className="container">
        <h1 className="subtopic">Projects</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <Cards
              title="Object Detection from Image"
              description="A streamlit web-application for stock market analysis of SP500 companies. This project involves web-scraping and data visualization."
              link="#"
              github="https://github.com/paul3bin/object_detection_api"
            />
          </div>
          <div className="col">
            <Cards
              title="SP500 Companies Stock Market Analysis"
              description="A streamlit web-application for stock market analysis of SP500 companies. This project involves web-scraping and data visualization."
              link="https://sp500-stock-market-analysis.herokuapp.com/"
              github="https://github.com/paul3bin/S-And-P-500-Companies-Stock-Market-Analysis-Web-App"
            />
          </div>
          <div className="col">
            <Cards
              title="To-Do Web Application"
              description="A to-do web app using Django, Django REST Framework and ReactJS with user registration and login using token authentication."
              link="https://to-do-application-c9aea.web.app/"
              github="https://github.com/paul3bin/to_do_frontend"
            />
          </div>
          <div className="col">
            <Cards
              title="Crypto Web-App"
              description="A web-application that encrypts and decrypts text using various algorithms like vignere, running key etc."
              link="https://cryptography-io.web.app/"
              github="https://github.com/paul3bin/cryptography-web-app"
            />
          </div>
          <div className="col">
            <Cards
              title="Battle of Neighborhoods"
              description="The scope of this project will be to provide a list of good restaurants based on cuisine, affordability and reviews."
              link="https://github.com/paul3bin/Coursera_Capstone/blob/master/Battle_of_Neighborhoods_Project.ipynb"
              github="https://github.com/paul3bin/Coursera_Capstone"
            />
          </div>
          <div className="col">
            <Cards
              title="Segmenting and Clustering Neighborhoods in Toronto"
              description="Using geospatial data of each neighbourhood, getting the top 5 common venues and using K-Means Clustering, seggregating them into clusters."
              link="https://github.com/paul3bin/Coursera_Capstone/blob/master/Segmenting_and_Clustering_Neighborhoods_in_Toronto.ipynb"
              github="https://github.com/paul3bin/Coursera_Capstone"
            />
          </div>
          <div className="col">
            <Cards
              title="Kaggle Titanic Dataset Challenge"
              description="This is project based on challenges for the titanic dataset on kaggle.com"
              link="https://github.com/paul3bin/titanic_dataScience/blob/master/Titanic_DataScience_Project.ipynb"
              github="https://github.com/paul3bin/titanic_dataScience"
            />
          </div>
          <div className="col">
            <Cards
              title="Connect Four Game"
              description="The objective is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs. The game is built using HTML, CSS and JavaScript."
              link="https://paul3bin.github.io/Connect-Four-Game/"
              github="https://github.com/paul3bin/Connect-Four-Game"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
