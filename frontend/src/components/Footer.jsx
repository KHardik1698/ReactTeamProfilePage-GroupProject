import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF } from "@fortawesome/free-solid-svg-icons";

// import faStyles from "font-awesome/css/font-awesome.css";
// import { Link } from "react-router-dom";

import footerstyle from "./Footer.module.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className={footerstyle["icons"]}>
          <span>
            {/* <i className={footerstyle["fa fa-twitter-square"]}> </i> */}
            <FontAwesomeIcon icon={["fab", "facebook"]} />
          </span>
          <span>
            {/* <i className={footerstyle["fa fa-linkedin-square"]}></i> */}
          </span>
          <span>
            <i className={footerstyle["fa fa-facebook-square"]}></i>
          </span>
        </div>
        <span className={footerstyle["footer-heading"]}>
          <span>
            <h1 className={footerstyle["copyright-heading"]}>
              Raw Engineering
            </h1>
          </span>
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
