import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "../components/Navigation";
import App from "../App";
import Home from "../pages/Home";
import ProfilePage from "../components/ProfilePage";
import Footer from "../components/Footer";

// import NotFound from "../components/NotFound";

class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/employees" exact component={Home} />
            <Route
              path="/employees/:id"
              exact
              render={(props) => {
                return <ProfilePage {...props} />;
              }}
            />
            {/* <Route component={NotFound}/> */}
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
