import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6} style={{ height: "100%" }}>
            <h2>Bob Krstic</h2>
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
                textAlign: "justify"
              }}
            >
              Hey, thanks for being here for this long. I hope that the website
              didn't bore you to death. I am still learning react and web
              development. Many stones are still unturned. But I am getting
              there slowly. Please feel free to contact me at any time. Check
              out my LinkedIn profile and GitHub account, the links are located
              at the front page. Click here:
              <Link to="/">My Portfolio</Link>, or in the top left corner of
              this screen and it will get you there.
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
                    916 - 878 - 8076
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
                    slobodankrsticusa@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Oxygen" }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    slobodankrsticusa
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
