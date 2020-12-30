import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "../components/Navigation";
import Home from "../pages/Home";
import ProfilePage from "../pages/ProfilePage";
import Footer from "../components/Footer";
import NotFound from "../pages/NotFound";
import initFontAwesome from "../components/initFontAwesome";

class Router extends Component {
  render() {
    initFontAwesome();
    return (
      <div>
        <BrowserRouter>
          <Navigation />
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
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
