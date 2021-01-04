import "./NotFound.css";
import {Link } from "react-router-dom";

function NotFound(){
    return(
        <div className="not-found-main">
            <div className="not-found-container">
                <img src="https://freefrontend.com/assets/img/html-funny-404-pages/Pure-CSS-404-Error-Page.png" alt="" className="image"></img>
                <Link to="/" className="btn-link">
                    <button className="btn">Go back to Home</button>
                </Link>

            </div>
        </div>
    )
}

export default NotFound;