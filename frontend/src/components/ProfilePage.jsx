import { Component } from "react";
import { withRouter } from "react-router-dom";

class ProfilePage extends Component {
  render() {
    let currentEmployee = this.props.location.state.employee;
    return (
      <div>
        <h1>{currentEmployee.name}</h1>
        <img src={currentEmployee.imageUrl} alt="" />
        <h2>{currentEmployee.company}</h2>
        <h4>{currentEmployee.designation}</h4>
        <p>{currentEmployee.description}</p>
      </div>
    );
  }
}

export default withRouter(ProfilePage);
