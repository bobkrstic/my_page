import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import background from "./background9.jpg";

class Landingpage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid
          className="landing-grid"
          style={{ backgroundImage: `url(${background})` }}
        >
          <Cell col={12}>
            <img
              style={{ borderColor: "black" }}
              src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
              alt="my-image"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | JavaScript | React | React Native |
                NodeJS | Express | Axios
              </p>
              <p>
                MongoDB | Firebase | MySQL | MAMP | Reactstrap | React-MDL |
                handlebars | EJS | json-server
              </p>
              <div className="social-links">
                {/* LinkedIn Account */}
                <a
                  href="https://www.linkedin.com/in/bob-krstic/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* GitHub Account */}
                <a
                  href="https://github.com/bobkrstic"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* Freecodecamp */}
                {/* <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a> */}

                {/* Youtube */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landingpage;
