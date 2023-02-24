import React, { Component } from "react";
import placeholder from "../assets/images/placeholder.png";
import Card from "../components/Card";
import portfolioScreenshot from "../assets/images/portfolio-screenshot.png";
import recipeAppScreenshot from "../assets/images/recipe-app-screenshot.png";
import lastFmScreenshot from "../assets/images/lastfm-screenshot.png";
import pwdScreenshot from "../assets/images/password-generator-screenshot.png";
import reactCalcScreenshot from "../assets/images/react-calculator-screenshot.png";
import reactToDo from "../assets/images/react-todo-screenshot.png";
import quizScreenshot from "../assets/images/quiz-screenshot.png";
import workdayScreenshot from "../assets/images/workday-scheduler.png";
 
class Work extends Component {
  render() {
    return (
      <div className="content-section two">
        <div className="main-content">
          <div className="work">
            <h2>Work</h2>
            <div className="card-list" style={{marginBottom:"2em"}}>
              <Card cardUrl="https://erin-m-keller.github.io/react-calculator/"
                    btnUrl="https://github.com/erin-m-keller/react-calculator"
                    src={reactCalcScreenshot}
                    alt="Screenshot of React Powered Calculator App"
                    title="React Powered Calculator"
                    tags={["#react","#javascript","#html","#css"]} />
              <Card cardUrl="https://erin-m-keller.github.io/keller-scheduler/"
                    btnUrl="https://github.com/erin-m-keller/keller-scheduler"
                    src={workdayScreenshot}
                    alt="Work Day Scheduler"
                    title="Work Day Scheduler"
                    tags={["#jquery","#day.js","#html","#css"]} />
              <Card cardUrl="https://erin-m-keller.github.io/keller-quiz/"
                    btnUrl="https://github.com/erin-m-keller/keller-quiz"
                    src={quizScreenshot}
                    alt="Coding Quiz"
                    title="Coding Quiz"
                    tags={["#javascript","#html","#css","#bootstrap"]} />
              <Card cardUrl="https://erin-m-keller.github.io/password-generator/"
                    btnUrl="https://github.com/erin-m-keller/password-generator"
                    src={pwdScreenshot}
                    alt="Password Generator"
                    title="Password Generator"
                    tags={["#javascript","#html","#css"]} />
              <Card cardUrl="https://erin-m-keller.github.io/keller-portfolio/#/"
                    btnUrl="https://github.com/erin-m-keller/keller-portfolio"
                    src={portfolioScreenshot}
                    alt="Erin Keller Portfolio"
                    title="Erin Keller Portfolio"
                    tags={["#react","#javascript","#html","#css"]} />
              <Card cardUrl="https://erin-m-keller.github.io/keller-todo/"
                    btnUrl="https://github.com/erin-m-keller/keller-todo"
                    src={reactToDo}
                    alt="React Powered To-Do List"
                    title="React Powered To-Do List"
                    tags={["#react","#javascript","#html","#css","#localstorage"]} />
              <Card cardUrl="https://erin-m-keller.github.io/recipe-app/#/"
                    btnUrl="https://github.com/erin-m-keller/recipe-app"
                    src={recipeAppScreenshot}
                    alt="Recipe Grocery List Search Engine"
                    title="Recipe Grocery List Search Engine"
                    tags={["#react","#javascript","#html","#css", "#edamam api"]} />
              <Card cardUrl="https://erin-m-keller.github.io/lastfm-app/#/"
                    btnUrl="https://github.com/erin-m-keller/lastfm-app"
                    src={lastFmScreenshot}
                    alt="LastFM Music Artist Search Engine"
                    title="LastFM Music Artist Search Engine"
                    tags={["#react","#javascript","#html","#css", "#lastfm api"]} />
              <Card cardUrl=""
                    btnUrl=""
                    src={placeholder}
                    alt="Sample photo"
                    title="Sample Heading"
                    tags={["#react","#javascript","#html","#css"]} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Work;