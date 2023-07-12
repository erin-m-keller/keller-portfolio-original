import React, { Component } from "react";
import Card from "../components/Card";
import NodeCard from "../components/NodeCard";
import portfolioScreenshot from "../assets/images/portfolio-screenshot.png";
import recipeAppScreenshot from "../assets/images/recipe-app-screenshot.png";
import lastFmScreenshot from "../assets/images/lastfm-screenshot.png";
import pwdScreenshot from "../assets/images/password-generator-screenshot.png";
import reactCalcScreenshot from "../assets/images/react-calculator-screenshot.png";
import reactToDo from "../assets/images/react-todo-screenshot.png";
import quizScreenshot from "../assets/images/quiz-screenshot.png";
import workdayScreenshot from "../assets/images/workday-scheduler.png";
import diceGame from "../assets/images/dice-game.png";
import pokemonScreenshot from "../assets/images/pokemon-screenshot.png";
import weatherScreenshot from "../assets/images/weather-screenshot.png";
import volunteerFinderScreenshot from "../assets/images/volunteer-finder-screenshot.png";
import svgMakeScreenshot from "../assets/images/svg-maker-screenshot.png";
import readmeGeneratorScreenshot from "../assets/images/readme-generator-screenshot.png";
import noteTakerScreenshot from "../assets/images/note-taker-screenshot.png";
import empTrackerScreenshot from "../assets/images/employee-tracker-screenshot.png";
import techBlogScreenshot from "../assets/images/techBlog.png";
import metaInsightScreenshot from "../assets/images/meta-insight.png";
import socialNetworkScreenshot from "../assets/images/social-network-screenshot.png";
import pwaScreenshot from "../assets/images/pwa-screenshot.png";
import ecommerceScreenshot from "../assets/images/ecommerce-screenshot.png";
import bookSearch from "../assets/images/book-search.png";
import reduxStore from "../assets/images/redux-store.png";
 
class Work extends Component {
  render() {
    return (
      <div className="content-section two">
        <div className="main-content">
          <div className="work">
            <h2>Collaborations</h2>
            <div className="card-list" style={{marginBottom:"2em"}}>
                  <Card cardUrl="https://meta-insight.herokuapp.com/"
                        btnUrl="https://github.com/erin-m-keller/meta-insight"
                        src={metaInsightScreenshot}
                        alt="Meta-Insight"
                        title="Meta-Insight"
                        tags={["#html","#css","#ionic","#javascript","#mysql","express","#jawsdb","#handlebars"]} />
                  <Card cardUrl="https://erin-m-keller.github.io/volunteer-finder/"
                        btnUrl="https://github.com/erin-m-keller/volunteer-finder"
                        src={volunteerFinderScreenshot}
                        alt="Volunteer Finder"
                        title="Volunteer Finder"
                        tags={["#html","#css","#bulma-css","#javascript","#firebase"]} />
            </div>
            <h2>Personal Web Projects</h2>
            <div className="card-list" style={{marginBottom:"2em"}}>
            <Card cardUrl="https://keller-redux-6960698a5b38.herokuapp.com/"
                  btnUrl="https://github.com/erin-m-keller/keller-redux"
                  src={reduxStore}
                  alt="Shop/Shop Store"
                  title="Shop/Shop Store"
                  tags={["#html5","#css","#javascript","#nodeJS","#expressJS","#mongoDB","#mongoose","#react","#redux","#graphQL","#apollo"]} />
            <Card cardUrl="https://keller-book-search-f22cfc8fab39.herokuapp.com/"
                  btnUrl="https://github.com/erin-m-keller/keller-book-search"
                  src={bookSearch}
                  alt="Google Book Search"
                  title="Google Book Search"
                  tags={["#html5","#css","#javascript","#nodeJS","#expressJS","#mongoDB","#react","#graphQL","#apollo"]} />
            <Card cardUrl="https://keller-text-editor-c96daa18d32b.herokuapp.com/"
                  btnUrl="https://github.com/erin-m-keller/keller-text-editor"
                  src={pwaScreenshot}
                  alt="PWA Text Editor"
                  title="PWA Text Editor"
                  tags={["#javascript","#css","#nodeJS","#expressJS","#pwa"]} />
              <Card cardUrl="https://keller-tech-blog.herokuapp.com/"
                    btnUrl="https://github.com/erin-m-keller/keller-tech-blog"
                    src={techBlogScreenshot}
                    alt="Tech Blog"
                    title="Tech Blog"
                    tags={["#html","#css","#fomantic-ui","#javascript","#nodeJS","#expressJS","#mysql","#sequelize","#handlebars"]} />
              <Card cardUrl="https://keller-note-taker.herokuapp.com/"
                    btnUrl="https://github.com/erin-m-keller/keller-note-tracker"
                    src={noteTakerScreenshot}
                    alt="Express.js Note Tracker"
                    title="Express.js Note Tracker"
                    tags={["#html","#css","#pure-css","#javascript","#nodeJS","#expressJS","#fs","#uuid"]} />
              <Card cardUrl="https://erin-m-keller.github.io/keller-weather/"
                    btnUrl="https://github.com/erin-m-keller/keller-weather"
                    src={weatherScreenshot}
                    alt="Weather Dashboard"
                    title="Weather Dashboard"
                    tags={["#html","#css","#bulma-css","#jquery","#openweather-api"]} />
              <Card cardUrl="https://erin-m-keller.github.io/keller-scheduler/"
                    btnUrl="https://github.com/erin-m-keller/keller-scheduler"
                    src={workdayScreenshot}
                    alt="Work Day Scheduler"
                    title="Work Day Scheduler"
                    tags={["#html","#css","#jquery","#day.js"]} />
              <Card cardUrl="https://erin-m-keller.github.io/keller-password/"
                    btnUrl="https://github.com/erin-m-keller/keller-password"
                    src={pwdScreenshot}
                    alt="Password Generator"
                    title="Password Generator"
                    tags={["#html","#css","#javascript"]} />
              <Card cardUrl="https://erin-m-keller.github.io/keller-portfolio-original/#/"
                    btnUrl="https://github.com/erin-m-keller/keller-portfolio-original"
                    src={portfolioScreenshot}
                    alt="Erin Keller Portfolio"
                    title="Erin Keller Portfolio"
                    tags={["#html","#css","#javascript","#react"]} />
              <Card cardUrl="https://erin-m-keller.github.io/keller-calculator/"
                    btnUrl="https://github.com/erin-m-keller/keller-calculator"
                    src={reactCalcScreenshot}
                    alt="Screenshot of React Powered Calculator App"
                    title="React Powered Calculator"
                    tags={["#html","#css","#javascript","#react"]} />
              <Card cardUrl="https://erin-m-keller.github.io/keller-pokemon/"
                    btnUrl="https://github.com/erin-m-keller/keller-pokemon"
                    src={pokemonScreenshot}
                    alt="Pokémon Search Engine"
                    title="Pokémon Search Engine"
                    tags={["#html","#css","#bootstrap","#javascript","#react","#pokéApi"]} />
              <Card cardUrl="https://erin-m-keller.github.io/keller-dice/"
                    btnUrl="https://github.com/erin-m-keller/keller-dice"
                    src={diceGame}
                    alt="Dice Game"
                    title="Dice Game"
                    tags={["#html","#css","#bulma-css","#jQuery","#localstorage"]} />
              <Card cardUrl="https://erin-m-keller.github.io/keller-todo/"
                    btnUrl="https://github.com/erin-m-keller/keller-todo"
                    src={reactToDo}
                    alt="React Powered To-Do List"
                    title="React Powered To-Do List"
                    tags={["#html","#css","#javascript","#localstorage","#react"]} />
              <Card cardUrl="https://erin-m-keller.github.io/keller-recipe/#/"
                    btnUrl="https://github.com/erin-m-keller/keller-recipe"
                    src={recipeAppScreenshot}
                    alt="Recipe Grocery List Search Engine"
                    title="Recipe Grocery List Search Engine"
                    tags={["#html","#css","#javascript","#react","#edamam api"]} />
              <Card cardUrl="https://erin-m-keller.github.io/keller-lastfm/#/"
                    btnUrl="https://github.com/erin-m-keller/keller-lastfm"
                    src={lastFmScreenshot}
                    alt="LastFM Music Artist Search Engine"
                    title="LastFM Music Artist Search Engine"
                    tags={["#html","#css","#bulma-css","#javascript","#react","#lastfm api"]} />
              <Card cardUrl="https://erin-m-keller.github.io/keller-quiz/"
                    btnUrl="https://github.com/erin-m-keller/keller-quiz"
                    src={quizScreenshot}
                    alt="Coding Quiz"
                    title="Coding Quiz"
                    tags={["#html","#css","#bootstrap","#javascript"]} />
            </div>
            <h2>Node.js Applications</h2>
            <div className="card-list" style={{marginBottom:"2em"}}>
                  <NodeCard cardUrl="javascript:void(0)"
                        btnUrl="https://github.com/erin-m-keller/keller-social-network"
                        src={ecommerceScreenshot}
                        alt="Screenshot of Ecommerce API"
                        title="Ecommerce API"
                        tags={["#javascript","#nodeJS","#expressJS","#sequelize","#mysql"]} />
              <NodeCard cardUrl="javascript:void(0)"
                    btnUrl="https://github.com/erin-m-keller/keller-social-network"
                    src={socialNetworkScreenshot}
                    alt="Screenshot of Social Network API"
                    title="Social Network API"
                    tags={["#javascript","#expressJS","#nodeJS","#mongoDB","#mongoose","#momentJS"]} />
              <NodeCard cardUrl="javascript:void(0)"
                    btnUrl="https://github.com/erin-m-keller/keller-employee-tracker"
                    src={empTrackerScreenshot}
                    alt="Screenshot of Employee Database Manager"
                    title="Employee Database Manager"
                    tags={["#javascript","#nodeJS","#mysql"]} />
              <NodeCard cardUrl="javascript:void(0)"
                    btnUrl="https://github.com/erin-m-keller/keller-svg-maker"
                    src={svgMakeScreenshot}
                    alt="Screenshot of SVG Maker"
                    title="SVG Maker"
                    tags={["#javascript","#nodeJS","#fs","#inquirer","#jest"]} />
              <NodeCard cardUrl="javascript:void(0)"
                    btnUrl="https://github.com/erin-m-keller/keller-readme"
                    src={readmeGeneratorScreenshot}
                    alt="Screenshot of README Generator"
                    title="README Generator"
                    tags={["#javascript","#nodeJS","#fs","#inquirer"]} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Work;