import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";

// import { faFacebookF } from "@fortawesome/free-solid-svg-icons";

// import faStyles from "font-awesome/css/font-awesome.css";
// import { Link } from "react-router-dom";

import footerstyle from "./Footer.module.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className={footerstyle["icons"]}>
          {/* <span> */}
          {/* <i className={footerstyle["fa fa-twitter-square"]}> </i> */}
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            className={footerstyle["facebook-icon"]}
            // size="2x"
          />
          {/* </span> */}
          {/* <span> */}
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
            className={footerstyle["twitter-icon"]}
            // size="2x"
          />
          {/* </span> */}
          {/* <span> */}
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            className={footerstyle["linkedin-icon"]}
            // size="2x"
          />
          {/* </span> */}
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
