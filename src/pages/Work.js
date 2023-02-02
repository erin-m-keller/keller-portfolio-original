import React, { Component } from "react";
import placeholder from "../assets/images/placeholder.png";
import Card from "../components/Card";
import portfolioScreenshot from "../assets/images/portfolio-screenshot.png";
import recipeAppScreenshot from "../assets/images/recipe-app-screenshot.png";
import lastFmScreenshot from "../assets/images/lastfm-screenshot.png";
 
class Work extends Component {
  render() {
    return (
      <div className="content-section two">
        <div className="main-content">
          <div className="work">
            <h2>Work</h2>
            <div className="card-list" style={{marginBottom:"2em"}}>
              <Card cardUrl="https://erin-m-keller.github.io/keller-portfolio/#/"
                    btnUrl="https://github.com/erin-m-keller/keller-portfolio"
                    src={portfolioScreenshot}
                    alt="Screenshot of Erin Keller's web portfolio"
                    title="React Portfolio"
                    tags={["#react","#javascript","#html","#css"]} />
              <Card cardUrl="https://erin-m-keller.github.io/recipe-app/#/"
                    btnUrl="https://github.com/erin-m-keller/recipe-app"
                    src={recipeAppScreenshot}
                    alt="Recipe Grocery List Search Engine"
                    title="Recipe Grocery List Search Engine"
                    imgClass="fixed"
                    tags={["#react","#javascript","#html","#css", "#edamam api"]} />
              <Card cardUrl="https://erin-m-keller.github.io/lastfm-app/#/"
                    btnUrl="https://github.com/erin-m-keller/lastfm-app"
                    src={lastFmScreenshot}
                    alt="LastFM Music Artist Search Engine"
                    title="LastFM Music Artist Search Engine"
                    imgClass="fixed"
                    tags={["#react","#javascript","#html","#css", "#lastfm api"]} />
              <Card cardUrl=""
                    btnUrl=""
                    src={placeholder}
                    alt="Sample photo"
                    title="Sample Heading"
                    imgClass="fixed"
                    tags={["#react","#javascript","#html","#css"]} />
              <Card cardUrl=""
                    btnUrl=""
                    src={placeholder}
                    alt="Sample photo"
                    title="Sample Heading"
                    imgClass="fixed"
                    tags={["#react","#javascript","#html","#css"]} />
              <Card cardUrl=""
                    btnUrl=""
                    src={placeholder}
                    alt="Sample photo"
                    title="Sample Heading"
                    imgClass="fixed"
                    tags={["#react","#javascript","#html","#css"]} />
              <Card cardUrl=""
                    btnUrl=""
                    src={placeholder}
                    alt="Sample photo"
                    title="Sample Heading"
                    imgClass="fixed"
                    tags={["#react","#javascript","#html","#css"]} />
              <Card cardUrl=""
                    btnUrl=""
                    src={placeholder}
                    alt="Sample photo"
                    title="Sample Heading"
                    imgClass="fixed"
                    tags={["#react","#javascript","#html","#css"]} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Work;