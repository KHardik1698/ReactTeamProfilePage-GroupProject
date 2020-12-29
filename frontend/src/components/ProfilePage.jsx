import { Component } from "react";
import { withRouter } from "react-router-dom";
import styles from "./ProfilePage.module.css";
import NotFound from "./NotFound";

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
        console.log(data);
        this.setState({ employee: data.data, status: data.status });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    let currentEmployee = this.state.employee;
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
              <p className={styles["name"]}>{currentEmployee.name}</p>
              <h6 className={styles["company"]}>
                <i>{currentEmployee.company}</i>
              </h6>
              <p className={styles["designation"]}>
                {currentEmployee.designation}
              </p>

              <p className={styles["description"]}>
                {currentEmployee.description}
              </p>
            </div>
          </div>
        ) : (
          <NotFound />
        )}
      </div>
    );
  }
}

export default withRouter(ProfilePage);
