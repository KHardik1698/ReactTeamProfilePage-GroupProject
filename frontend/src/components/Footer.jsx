import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerstyle from "./Footer.module.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className={footerstyle["icons"]}>
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              className={footerstyle["facebook-icon"]}
            />
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
            className={footerstyle["twitter-icon"]}
          />
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            className={footerstyle["linkedin-icon"]}
          />
        </div>
        <span className={footerstyle["footer-heading"]}>
          <p className={footerstyle["copyright-heading"]}>Raw Engineering</p>
          <br />
          <p className={footerstyle["copyright"]}>
            Copyright &copy; raweng.com 2020
          </p>
        </span>
      </footer>
    );
  }
}

export default Footer;
