import { Component } from "react";

import { withRouter } from "react-router-dom";
import styles from "./ProfilePage.module.css";

const url = "http://localhost:5000/employees";
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
        console.log(data);
        this.setState({ employee: data.data, status: data.status });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    let currentEmployee = this.props.location.state.employee;
    return (
      <div>
        {this.state.status === "Successful" ? (
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
              {/* <h6 className={styles["company"]}>
                <i>{currentEmployee.company}</i>
              </h6> */}
              <p className={styles["designation"]}>
                {currentEmployee.designation} at {currentEmployee.company}
              </p>

              <p className={styles["description"]}>
                {currentEmployee.description}
              </p>
              <a href={currentEmployee.githubLink} className={styles["github"]}>
                <i className={styles["github-heading"]}>GitHub Link</i>
              </a>
            </div>
          </div>
        ) : (
          <h1>Not found</h1>
        )}
      </div>
    );
  }
}

export default withRouter(ProfilePage);
