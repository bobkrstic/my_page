import React, { Component } from "react";
import logo from "../logo1.png";

export class Body extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt="something" className="logo1" />
        <h5>woweweb</h5>
      </div>
    );
  }
}

export default Body;
