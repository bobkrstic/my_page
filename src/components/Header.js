import React, { Component } from "react";
import logo from "../logo1.png";

export class Header extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt="something" className="logo1" />
        <br />
        <button>WoWeWeb</button>
      </div>
    );
  }
}

export default Header;
