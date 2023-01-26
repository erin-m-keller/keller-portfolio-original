import React, { Component } from "react";
import placeholder from "../assets/images/placeholder.png";
import Card from "../components/Card";
 
class Work extends Component {
  render() {
    return (
      <div className="content-section two">
        <div className="main-content">
          <h2>Work</h2>
          <div className="card-list" style={{marginBottom:"2em"}}>
            <Card cardUrl="https://erin-m-keller.github.io/keller-portfolio/#/"
                  btnUrl="https://github.com/erin-m-keller/keller-portfolio"
                  src={placeholder}
                  alt="Sample photo"
                  title="React Portfolio"
                  tags={["#react","#javascript","#html","#css"]} />
            <Card cardUrl="https://erin-m-keller.github.io/keller-portfolio/#/"
                  btnUrl="https://github.com/erin-m-keller/keller-portfolio"
                  src={placeholder}
                  alt="Sample photo"
                  title="React Portfolio"
                  tags={["#react","#javascript","#html","#css"]} />
            <Card cardUrl="https://erin-m-keller.github.io/keller-portfolio/#/"
                  btnUrl="https://github.com/erin-m-keller/keller-portfolio"
                  src={placeholder}
                  alt="Sample photo"
                  title="React Portfolio"
                  tags={["#react","#javascript","#html","#css"]} />
            <Card cardUrl="https://erin-m-keller.github.io/keller-portfolio/#/"
                  btnUrl="https://github.com/erin-m-keller/keller-portfolio"
                  src={placeholder}
                  alt="Sample photo"
                  title="React Portfolio"
                  tags={["#react","#javascript","#html","#css"]} />
            <Card cardUrl="https://erin-m-keller.github.io/keller-portfolio/#/"
                  btnUrl="https://github.com/erin-m-keller/keller-portfolio"
                  src={placeholder}
                  alt="Sample photo"
                  title="React Portfolio"
                  tags={["#react","#javascript","#html","#css"]} />
            <Card cardUrl="https://erin-m-keller.github.io/keller-portfolio/#/"
                  btnUrl="https://github.com/erin-m-keller/keller-portfolio"
                  src={placeholder}
                  alt="Sample photo"
                  title="React Portfolio"
                  tags={["#react","#javascript","#html","#css"]} />
          </div>
        </div>
      </div>
    );
  }
}
 
export default Work;