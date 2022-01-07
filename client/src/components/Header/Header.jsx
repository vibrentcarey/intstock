import InStockLogo from "../../assets/InStock-Logo.svg";
import "../Header/Header.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../components/Header/Header.scss";

const values = [
  { id: 1, text: "Warehouses" },
  { id: 2, text: "Inventory" }
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: 1
    };
  }

  setActiveId(id) {
    this.setState({
      activeId: id
    });
  }

  render() {
    return (
      <header className="header">
        <Link to="/" className="header__link">
          <div className="header__logo-box">
            <img
              src={InStockLogo}
              alt="InStock logo"
              className="header__logo"
            />
          </div>
        </Link>

        <div className="header__button-box">
          <ul className="header__list">
            {values.map((val) => (
              <li
                key={val.text}
                className={
                  this.state.activeId === val.id
                    ? "header__list-item header__active-item"
                    : "header__list-item"
                }
                onClick={() => this.setActiveId(val.id)}
              >
                <Link to={val.text === "Warehouses" ? "/" : "/inventory"}>
                  {val.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
