import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import ProfilePage from "../pages/ProfilePage";
import NotFound from "../components/NotFound";

class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/employees/:id"
              exact
              render={(props) => {
                return <ProfilePage {...props} />;
              }}
            />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
