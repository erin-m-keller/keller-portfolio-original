import React, { Component } from "react";
 
class Resume extends Component {
  render() {
    return (
      <article className="content-section four">
        <div className="main-content">
          <h2>Resume</h2>
          <div className="page-wrap">
            <img src="images/cthulu.png" alt="Photo of Cthulu" className="resume-img" />
            <h3 className="title">Erin Keller</h3>
            <p><strong>Email</strong>: <a class="email" href="mailto:aestheticartist@gmail.com">aestheticartist@gmail.com</a></p>
            <p><strong>Location</strong>: Lansing, Michigan</p>
            <div className="objective">
                <p>
                  Technically proficient and committed developer who maintains cutting-edge skills and industry knowledge. Experience coding responsive websites 
                  and web applications using HTML/HTML5, LESS, CSS/CSS3, SASS, JavaScript, jQuery, Node.js, MongoDB, and ReactJS.
                </p>
            </div>
            <div className="hr"></div>
            <div className="clear"></div>
            <dl>
                <dd className="clear"></dd>
                <dt>Education</dt>
                <dd>
                    <p>Lansing Community College</p>
                    <p><strong>Degree:</strong> Computer Programmer/Business Analyst</p>
                </dd>
                <dd className="clear"></dd>
                <dt>Skills</dt>
                <dd>
                    <p>Office skills</p>
                    <p>Office and records management, database administration, event organization, customer support, travel coordination</p>
                    <p>Computer skills</p>
                    <p>Microsoft productivity software (Word, Excel, etc), Adobe Creative Suite, Windows</p>
                </dd>
                <dd class="clear"></dd>
                <dt>Experience</dt>
                <dd>
                    <p>Doomsday Cult <span>Leader/Overlord - Baton Rogue, LA - 1926-2010</span></p>
                    <ul>
                        <li>Inspired and won highest peasant death competition among servants</li>
                        <li>Helped coordinate managers to grow cult following</li>
                        <li>Provided untimely deaths to all who opposed</li>
                    </ul>
                    <p>The Watering Hole <span>Bartender/Server - Milwaukee, WI - 2009</span></p>
                    <ul>
                        <li>Worked on grass-roots promotional campaigns</li>
                        <li>Reduced theft and property damage percentages</li>
                        <li>Janitorial work, Laundry</li>
                    </ul> 
                </dd>
                <dd className="clear"></dd> 
                <dt>Hobbies</dt>
                <dd>World Domination, Deep Sea Diving, Murder Most Foul</dd>
                <dd className="clear"></dd>
                <dt>References</dt>
                <dd>Available on request</dd>
                <dd className="clear"></dd>
            </dl>
            <div className="clear"></div> 
          </div>
        </div>
      </article>
    );
  }
}
 
export default Resume;