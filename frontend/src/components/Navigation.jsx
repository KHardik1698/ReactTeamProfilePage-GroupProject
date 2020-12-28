import {Component} from "react";
import {Link} from "react-router-dom";
class Navigation extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <Link to="/">Landing Page</Link>
                    </li>
                    <li>
                        <Link to="/employees">Employees</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navigation;