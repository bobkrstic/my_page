import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontFamily: "Oxygen"
                }}
                to="/"
              >
                My Portfolio
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link
                to="/resume"
                style={{
                  color: "white",
                  fontSize: "1em",
                  fontFamily: "Oxygen"
                }}
                className="pages"
              >
                Resume
              </Link>
              <Link
                to="/aboutme"
                style={{
                  color: "white",
                  fontSize: "1em",
                  fontFamily: "Oxygen"
                }}
                className="pages"
              >
                About Me
              </Link>
              <Link
                to="/projects"
                style={{
                  color: "white",
                  fontSize: "1em",
                  fontFamily: "Oxygen"
                }}
                className="pages"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                style={{
                  color: "white",
                  fontSize: "1em",
                  fontFamily: "Oxygen"
                }}
                className="pages"
              >
                Contact
              </Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                MyPortfolio
              </Link>
            }
            className="droverce"
          >
            <Navigation>
              <Link to="/resume" style={{ color: "black" }}>
                Resume
              </Link>
              <Link to="/aboutme" style={{ color: "black" }}>
                About Me
              </Link>
              <Link to="/projects" style={{ color: "black" }}>
                Projects
              </Link>
              <Link to="/contact" style={{ color: "black" }}>
                Contact
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
