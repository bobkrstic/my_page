import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";

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
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}> Bob Krstic</h2>
            <h4 style={{ color: "grey" }}>Full Stack Web Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "55%" }} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "55%" }} />
            <h5>Address</h5>
            <p>1 Pacifica, CA 94044</p>
            <h5>Phone</h5>
            <p>123-123-1234</p>
            <h5>Email</h5>
            <p>me@someemail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "55%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2017}
              endYear={2018}
              schoolName={"University of California Berkeley Coding Bootcamp"}
              schoolDescription={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }
            />

            <Education
              startYear={2015}
              endYear={2017}
              schoolName={"City College of San Francisco"}
              schoolDescription={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }
            />

            <Education
              startYear={2002}
              endYear={2006}
              schoolName={"Fabus"}
              schoolDescription={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2018}
              endYear={"present"}
              jobName={"First Startup"}
              jobDescription={"Some text about what I have done there"}
            />

            <Experience
              startYear={2017}
              endYear={2018}
              jobName={"Second Startup"}
              jobDescription={"Some text about what I have done there"}
            />

            <Experience
              startYear={2017}
              endYear={2018}
              jobName={"Trilogy Education Systems"}
              jobDescription={"Some text about what I have done there"}
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
