import {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navigation from "../components/Navigation";
import App from "../App";
import Home from "../pages/Home";
class Router extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Navigation/>
                    <Switch>
                        <Route path="/" exact component={App}/>
                        <Route path="/employees" exact component={Home}/>
                        {/* <Route 
                            path="/employees/:id" 
                            exact
                            render = {
                                (props)=>{
                                    console.log(props);
                                    return <Profile {...props}/>
                                }
                            }
                        /> */}
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Router; 