import { Component } from "react";
// import { withRouter } from "react-router-dom";
import styles from "./ProfilePage.module.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import initFontAwesome from "../components/initFontAwesome";
import NotFound from "../components/NotFound";

const url = "https://employee-card-backend.herokuapp.com/employees";
class ProfilePage extends Component {
  state = {
    employee: [],
    status: "",
  };
  componentDidMount = () => {
    fetch(`${url}/${this.props.match.params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ employee: data.data, status: data.status });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    initFontAwesome();
    let currentEmployee = this.state.employee;
    return (
      <div>
        {this.state.status === "" ? (
          <div className={styles["loading"]}>
            <h1>Loading...</h1>
          </div>
        ) : this.state.status === "Successful" ? (
          <div>
            <Navigation />
            <div className={styles["container"]}>
              <img
                src={currentEmployee.imageUrl}
                className={styles["image-container"]}
                alt=""
              />
              <div className={styles["employee-info"]}>
                <p className={styles["name"]}>
                  Everyone, Meet <b>{currentEmployee.name} </b>
                </p>
                <p className={styles["designation"]}>
                  {currentEmployee.designation} at {currentEmployee.company}
                </p>
                <p className={styles["description"]}>
                  {currentEmployee.description}
                </p>
                <a
                  href={currentEmployee.githubLink}
                  className={styles["github"]}
                >
                  <i className={styles["github-heading"]}>GitHub Link</i>
                </a>
              </div>
            </div>
            <Footer />
          </div>
        ) : (
          <NotFound />
        )}
      </div>
    );
  }
}

export default ProfilePage;
