import React, { Component } from "react";
import profileImg from "../assets/images/erin.jpeg";
import resume from "../assets/documents/erin-resume.pdf";
 
class Resume extends Component {
  render() {
    return (
      <div className="content-section four">
        <div className="main-content">
          <h2>Resume</h2>
          <div className="resume">
            <div className="main">
              <div className="edu-exp">
                <figure>
                  <img src={profileImg} alt="Photo of Erin Keller" className="resume-img" />
                </figure>
                <h3 className="resume-title">Erin Keller<span className="resume-subtitle">Full Stack Developer</span></h3>
                <form action={resume} target="_blank">
                  <input type="submit" value="Download" className="resume-btn" />
                </form>
                <article className="objective">
                    <h4 className="resume-bold">Profile</h4>
                    <p className="sm">
                      Technically proficient and committed developer who maintains cutting-edge skills and industry knowledge. Experience coding responsive websites 
                      and web applications using HTML/HTML5, LESS, CSS/CSS3, SASS, JavaScript, jQuery, Node.js, MongoDB, and ReactJS.
                    </p>
                </article>
                <article>
                  <div>
                    <h4 className="resume-bold">Experience</h4>
                    <p className="resume-bold">Learning Developer, IBM, Lansing<span>May 2013 - Present</span></p>
                    <p className="sm">I provide consultation, web application development, and technical support as part of my job duties. Creating learning tools to promote growth in leadership, management, and executive development is one of my responsibilities. Additionally, I create email communications for various programs offered by Leadership Academy and assist in managing content. Our technology stack is made up of HTML5, CSS/SASS, PHP (old site), JavaScript, Node.js, MongoDB, and ReactJS (new site), together with Cirrus for cloud development.</p>
                  </div>
                  <div>
                    <p className="resume-bold">Student Programmer, Lansing Community College, Lansing<span>May 2012 - May 2013</span></p>
                    <p className="sm">Code PL/SQL queries to manage databases, write applications in Application Express, install new applications and new versions of existing applications, assist in code reviews (mainly PL/SQL, and Java).</p>
                  </div>
                  <div>
                    <p className="resume-bold">Front-end Developer, Tripper's, Lansing<span>Sep 2010 - Sep 2011</span></p>
                    <p className="sm">Designer and developer of the Tripper's restaurant web site and promotional materials. A modern design was used to create an eye-catching site for the client. The site was created using CSS, HTML, and form processing. Designed and assembled web graphics, web advertisements, and restaurant interactive menus (graphic work did not include "Tripper's" logo). In addition to managing the site, I handled correspondence between the manager and online customers.</p>
                  </div>
                  <div>
                    <p className="resume-bold">Shift Leader II, Speedway LLC, Lansing<span>Feb 2006 - Sep 2010</span></p>
                    <p className="sm">The company heavily trained me in both food service management and leadership. The majority of the schedules were handled by me while I was employed, and I managed multiple employees. The other tasks include cash management, organizing special events, daily reporting, and maintaining inventory.</p>
                  </div>
                </article>
                <article>
                  <h4 className="resume-bold">Education</h4>
                  <div>
                    <p className="resume-bold">Sault Area High School</p>
                    <p className="sm">Diploma: General Education</p>
                    <p className="sm">Certification: Novell Networking</p>
                  </div>
                  <div>
                    <p className="resume-bold">Lansing Community College</p>
                    <p className="sm">Associate's Degree: Computer Programmer/Business Analyst</p>
                  </div>
                </article>
                <article>
                  <h4 className="resume-bold">Badges</h4>
                  <p className="sm"><a href="https://www.credly.com/badges/bde1d498-b46f-414a-8bcc-f8943d15c7a8?source=linked_in_profile" target="_blank">Data Science Foundations - Level 1</a>, <a href="https://www.credly.com/badges/5f6891fb-4ba4-41a6-afbe-b80f39218f3a?source=linked_in_profile" target="_blank">IBM Carbon Design Systems Developer Essentials - React</a>, <a href="https://www.credly.com/badges/c08b7c46-c03d-4e33-8849-930480d37792?source=linked_in_profile" target="_blank">IBM Virtual Collaborator</a>, <a href="https://www.credly.com/badges/953104f8-84ef-4d73-b2c0-4880e191278a/linked_in_profile" target="_blank">IBM Digital Learning Transformation</a>, <a href="https://www.credly.com/badges/452993ff-74d7-4569-8267-e0118c9c0f97/linked_in_profile" target="_blank">IBM Agile Explorer</a>, <a href="https://www.credly.com/badges/becc3448-2a5a-4bbd-8282-dee30de55b62/linked_in_profile" target="_blank">Cognitive Practitioner</a>, <a href="https://www.credly.com/badges/c448c084-95d6-4947-bb9a-99f857e6adde/linked_in_profile" target="_blank">Human Resources in a Cognitive Era - Essentials</a>, <a href="https://www.credly.com/badges/9f4cc05e-0e1a-42d9-a0ea-cbcc63571401/linked_in_profile" target="_blank">IBM Mentor</a>, <a href="https://www.credly.com/badges/ea25633c-9cac-4fa6-b711-bc2087b51244/linked_in_profile" target="_blank">IBM Cloud Essentials</a>, <a href="https://www.credly.com/badges/bef456a5-3b2b-4619-bf85-da3d12cf5ffc/linked_in_profile" target="_blank">IBM Design Thinking Practitioner</a>, <a href="https://www.credly.com/badges/223dc2c4-4ba8-4868-a22b-4932c735a52c?source=linked_in_profile" target="_blank">IBM Growth Behaviors</a></p>
                </article>
                <article>
                  <h4 className="resume-bold">References</h4>
                  <p className="sm">Available on request.</p>
                </article>
              </div>
              <div className="sidebar">
                <article>
                  <p  className="resume-bold">Details</p>
                  <div className="contact">
                    <p className="sm">Lansing</p>
                    <p className="sm">United States</p>
                    <p className="sm">989-780-6463</p>
                    <p className="sm"><a href="mailto:aestheticartist@gmail.com">aestheticartist@gmail.com</a></p>
                  </div>
                </article>
                <article>
                  <p  className="resume-bold">Links</p>
                  <p className="sm"><a href="https://www.linkedin.com/in/erin-m-keller/" target="_blank">LinkedIn</a></p>
                </article>
                <article>
                  <p  className="resume-bold">Skills</p>
                  <p className="sm">Interpersonal Skills</p>
                  <p className="sm">Creativity</p>
                  <p className="sm">Problem Solving</p>
                  <p className="sm">Decision Making</p>
                  <p className="sm">Computer Skills</p>
                  <p className="sm">Effective Time Management</p>
                  <p className="sm">Ability to Multitask</p>
                  <p className="sm">Fast Learner</p>
                  <p className="sm">Adaptability</p>
                  <p className="sm">Customer Service</p>
                  <p className="sm">Ability to Work Under Pressure</p>
                  <p className="sm">Ability to Work in a Team</p>
                  <p className="sm">Communication Skills</p>
                  <p className="sm">Microsoft Office</p>
                  <p className="sm">Adobe Illustrator</p>
                  <p className="sm">Adobe Photoshop</p>
                  <p className="sm">CSS3</p>
                  <p className="sm">HTML</p>
                  <p className="sm">HTML &amp; CSS</p>
                  <p className="sm">NodeJS</p>
                  <p className="sm">HTML5</p>
                  <p className="sm">Bootstrap</p>
                  <p className="sm">jQuery</p>
                  <p className="sm">CSS</p>
                  <p className="sm">Node.js</p>
                  <p className="sm">MySQL</p>
                  <p className="sm">MongoDB</p>
                  <p className="sm">Git</p>
                  <p className="sm">React</p>
                  <p className="sm">JavaScript</p>
                </article>
                <article>
                  <p className="resume-bold">Hobbies</p>
                  <p className="sm">Reading, playing piano, playing board games, listening to music, watching/reading true crime, watching anime, camping, backpacking, hiking, kayaking, cooking and baking.</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Resume;