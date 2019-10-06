import React, { Component } from "react";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="container center">
        <nav className="menu">
          <h1 className="menu__logo">WoWeWeb</h1>

          <div className="menu__right">
            <ul className="menu__list">
              <li className="menu__list-item">
                <a className="menu__link menu__link--active" href="#">
                  Home
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__link" href="#">
                  About
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__link" href="#">
                  Portfolio
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__link" href="#">
                  Contact
                </a>
              </li>
            </ul>

            <button className="menu__search-button"></button>

            <form className="menu__search-form hide" method="POST">
              <input
                className="menu__search-input"
                placeholder="Type and hit enter"
              />
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
