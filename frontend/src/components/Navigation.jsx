import { Component } from "react";
import { Link } from "react-router-dom";
import NavStyle from "./Navigation.module.css";
class Navigation extends Component {
  render() {
    return (
      <div className={NavStyle["topnav"]}>
        <h3 className={NavStyle["logo"]}>Meet our Team</h3>
        <ul>
          <li>
            <Link to="/" className={NavStyle["link"]}>
              Our Team
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
