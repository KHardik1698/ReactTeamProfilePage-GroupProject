import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
const url = "https://employee-card-backend.herokuapp.com/employees";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }
  componentDidMount = (event) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ employees: data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <div className={styles["employee-header"]}>
          <p>Our Team</p>
        </div>
        <div className={styles["employee-sub-header"]}>
          <p>Trainee Batch 2020 - Raw Enigneering/Contentstack </p>
        </div>
        <div className={styles["employee-container"]}>
          {this.state.employees.map((employee) => {
            return (
              <div key={employee.id}>
                <Link
                  to={`/employees/${employee.id}`}
                  className={styles["employee-card-container"]}
                >
                  <div className={styles["employee-card"]}>
                    <div className={styles["image-div"]}>
                      <img
                        className={styles["employee-image"]}
                        src={employee.imageUrl}
                        alt={`${employee.name}-profilePicture`}
                      />
                    </div>
                    <div className={styles["employee-details"]}>
                      <div className={styles["employee-name"]}>
                        <p> {employee.name} </p>
                      </div>
                      <div className={styles["employee-company"]}>
                        <p> {employee.company} </p>
                      </div>
                      <div className={styles["employee-description"]}>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quod, ratione fugiat aliquid nesciunt deleniti
                          dolor earum quidem eos nihil odio ea voluptas magnam
                          libero accusamus exercitationem vitae ex, nam omnis?
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
