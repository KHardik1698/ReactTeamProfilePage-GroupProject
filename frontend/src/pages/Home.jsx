import { Component } from "react";
import { Link } from "react-router-dom";
const url = "http://localhost:5000/employees/";

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
        {this.state.employees.map((employee) => {
          return (
            <div key={employee.id}>
              <img src={employee.imageUrl} alt="employee-profilePicture" />
              <Link
                to={{
                  pathname: `/employees/${employee.id}`,
                  state: { employee: employee },
                }}
              >
                <p>{employee.name}</p>
              </Link>
              <p>{employee.company}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;
