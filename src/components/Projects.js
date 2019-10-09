import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

export class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0
    };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project One */}
          <Card shadow={5} style={{ minWidth: "400", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover"
              }}
            >
              React Project 1
            </CardTitle>
            <CardText>
              Here goest a brief introduction to the project, what it
              represents, how many contributors, technologies used along with
              reactjs, etc.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              {" "}
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project Two */}
          <Card shadow={5} style={{ minWidth: "400", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover"
              }}
            >
              React Project 2
            </CardTitle>
            <CardText>
              Here goest a brief introduction to the project, what it
              represents, how many contributors, technologies used along with
              reactjs, etc.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              {" "}
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project Three */}
          <Card shadow={5} style={{ minWidth: "400", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover"
              }}
            >
              React Project 3
            </CardTitle>
            <CardText>
              Here goest a brief introduction to the project, what it
              represents, how many contributors, technologies used along with
              reactjs, etc.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              {" "}
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>Project 2</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>Project 3</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>Project 4</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Project2</Tab>
          <Tab>Project3</Tab>
          <Tab>Project4</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
