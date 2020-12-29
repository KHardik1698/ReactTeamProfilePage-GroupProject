import { Component } from "react";
import { withRouter } from "react-router-dom";
const url = "http://localhost:5000/employees";
class ProfilePage extends Component {
  state={
    employee : [],
    status: "",
  }

  componentDidMount = ()=>{
    fetch(`${url}/${this.props.match.params.id}`)
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      console.log(data);
      this.setState({employee: data.data, status: data.status});

    })
    .catch((err)=>{
      console.log(err);
    })
  }
  render() {
    console.log(this.state.employee);
    console.log(this.state.status);
    return (
      <div>
        {
          this.state.status === "Successful"? (
            <div>
            <h1>{this.state.employee.name}</h1>
            <img src={this.state.employee.imageUrl} alt="" />
            <h2>{this.state.employee.company}</h2>
            <h4>{this.state.employee.designation}</h4>
            <p>{this.state.employee.description}</p>
          </div>
          ) :
          <h1>Not found</h1>
        }
      </div>

    );
  }
}

export default withRouter(ProfilePage);
