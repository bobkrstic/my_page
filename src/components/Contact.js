import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6} style={{ height: "100%" }}>
            <h2>Name Lastname</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="myImage"
              style={{ height: "250px" }}
              className="contact-image"
            />
            <p
              style={{
                width: "75%",
                margin: "auto",
                paddingTop: "1em",
                textAlign: "justify",
              }}
            >
              Hey, thanks for being here for this long. I hope that the website
              didn't bore you to death. I am still learning react and web
              development. Many stones are still unturned. But I am getting
              there. Please feel free to contact me at any time. Check out my
              LinkedIn profile and GitHub account, the links are located at the
              front page. <br></br>
              <br></br>
              <Link to="/">My Portfolio</Link> - click on this link or in the
              top left corner of any page and it will get you there.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Oxygen" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    My Phone Number
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Special Elite" }}
                  >
                    <i className="fa fa-fax" aria-hidden="true" />
                    Really???
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Oxygen" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    myEmail@email.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Oxygen" }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    my Skype name
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
