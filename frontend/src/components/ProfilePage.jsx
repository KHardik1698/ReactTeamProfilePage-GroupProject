import { Component } from "react";
import { withRouter } from "react-router-dom";
import styles from "./ProfilePage.module.css";

class ProfilePage extends Component {
  render() {
    console.log(this.props);
    let currentEmployee = this.props.location.state.employee;

    return (
      <div className={styles["container"]}>
        <img
          src={currentEmployee.imageUrl}
          className={styles["image-container"]}
          alt=""
        />
        <div className={styles["employee-info"]}>
          <h6 className={styles["company"]}>
            <i>{currentEmployee.company}</i>
          </h6>
          <p className={styles["designation"]}>{currentEmployee.designation}</p>
          <p className={styles["name"]}>{currentEmployee.name}</p>

          <p className={styles["description"]}>{currentEmployee.description}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(ProfilePage);
