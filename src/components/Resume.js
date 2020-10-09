import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.shareicon.net/data/128x128/2017/07/13/888372_man_512x512.png"
                alt="my-img"
                style={{ height: "200px" }}
                className="resume-image"
              />
            </div>
            <h2 style={{ paddingTop: "1em" }}> Name Lastname</h2>
            <h4 style={{ color: "grey" }}>Full Stack Web Developer</h4>
            <hr style={{ borderTop: "1px dotted black", width: "100%" }} />
            <p style={{ textAlign: "justify" }}>
              My focus is on both, Front End and Back End development. I have
              been coding for a while now. And as you know, learning never
              stops. Ups and downs, forgetting things and going over them
              again... it happened to you, it has been happening to me. See to
              the right for more info about my education. Here is the list of
              technologies that I got in contact with: React.js, Node.js, React
              Native, HTML, CSS, JavaScript, C++, Swift, Unix, Firebase,
              MongoDB, MySQL, MAMP, Sequel Pro, Postman, Axios, Ajax, Express,
              handlebars, EJS, Bootstrap, Reactstrap, React-MDL, Slick,
              json-server, Google Fonts, Ui Gradients, Webgradients, Edamam API,
              Twitter API, Spotify API Geo Locator, Git and GitHub.
            </p>
            <hr style={{ borderTop: "1px dotted black", width: "100%" }} />
            <h5 style={{ fontWeight: "bold" }}>Address</h5>
            <p>Bay Area</p>
            <h5 style={{ fontWeight: "bold" }}>Phone</h5>
            <p>My Phone Number</p>
            <h5 style={{ fontWeight: "bold" }}>Email</h5>
            <p>my Email Address</p>
            <h5 style={{ fontWeight: "bold" }}>Web Page</h5>
            <p>work in progress</p>
            <hr style={{ borderTop: "1px dotted black", width: "100%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2017}
              endYear={2018}
              schoolName={"University of California Berkeley Coding Bootcamp"}
              schoolDescription={
                "Six months coding bootcamp. Full Stack Web Development program, developing apps UI while working with the server side. Main focus was on the JavaScript, HTML and CSS, Firebase and MongoDB and NodeJS. Along came the rest of the tecnologies that are commonly used within the web development industry."
              }
            />

            <Education
              startYear={2015}
              endYear={2017}
              schoolName={"City College of San Francisco"}
              schoolDescription={
                "iPhone programming certificate. Required classes for the program were unix, C++, Swift. I graduated from the program with the highest grade."
              }
            />

            <Education
              startYear={2002}
              endYear={2006}
              schoolName={"BRABUS"}
              schoolDescription={
                "BRABUS stands for Facutly for Business in Services. It is a unversity that I attended while still living in Europe. I received my Bachelor's Degree in Economics with the focus on Hotel business and Sports management "
              }
            />
            <hr style={{ borderTop: "1px dotted black", width: "100%" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2019}
              endYear={2019}
              jobName={"Mi Kasa"}
              jobDescription={
                "A small start up focusing on real estate business. The app would allow individuals to buy houses directly form the seller. My task currently is the Front End, working with UI functionality and design. We are using React.js, Redux, MongoDB to store our data."
              }
            />

            <Experience
              startYear={2017}
              endYear={2018}
              jobName={"nTRIn"}
              jobDescription={
                "React Native based app, can be used on both iPhone and Android. The app is connecting accident location to the authorities and allows quicker response. My task was the front end and design."
              }
            />

            <Experience
              startYear={2017}
              endYear={2018}
              jobName={"Trilogy Education Systems"}
              jobDescription={
                "Six months training, developing Full Stack applications with the focus on HTML, CSS, JavaScript and Firebase."
              }
            />
            <hr style={{ borderTop: "1px dotted black", width: "100%" }} />
            <h2>Skills</h2>
            <Skills skill="React.js" progress={45} />
            <Skills skill="JavaScript" progress={50} />
            <Skills skill="HTML" progress={70} />
            <Skills skill="CSS" progress={65} />
            <Skills skill="Node.js" progress={50} />
            <Skills skill="C++" progress={35} />
            <Skills skill="Java" progress={25} />
            <Skills skill="Swift" progress={37} />
            <Skills skill="ReactNative" progress={25} />
            <Skills skill="Redux" progress={3} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
