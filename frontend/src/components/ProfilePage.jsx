import { Component } from "react";

class ProfilePage extends Component {
  render() {
    // console.log("Profile Page Props", this.props);
    //   this.props.employeeObject is the expected prop which will be used to access
    //   data for the Markup components
    return (
      <div>
        {/* div id or parent component id will be this.props.employeeObject.employeeId */}
        <header>
          <h1>Header Component</h1>
        </header>
        <h1>My Profile</h1>
        <img
          src="https://longwoods-intl.com/sites/default/files/2018-11/placeholder_male1.png"
          alt=""
        />
        {/* src will be this.props.employeeObject.imageUrl */}
        <h1>Firstname Lastname</h1>
        {/* name will be this.props.employeeObject.employeeName */}
        <h3>DoB(Optional)</h3>
        {/* company will be this.props.employeeObject.dob */}
        <h2>Company</h2>
        {/* company will be this.props.employeeObject.company */}
        <h4>Department</h4>
        {/* company will be this.props.employeeObject.department */}
        <h4>Designation</h4>
        {/* designation will be this.props.employeeObject.designation */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore
          nobis accusantium quidem, cumque ipsa ab excepturi quod corporis
          corrupti velit facere quibusdam quia, iste sint autem delectus ex
          veritatis voluptates alias, perspiciatis nemo. Reprehenderit provident
          maxime officia quo officiis rerum quod perspiciatis quas. Consectetur
          amet rem autem delectus unde.
        </p>
        {/* description will be this.props.employeeObject.description */}
        <footer>
          <h1>Footer Component</h1>
        </footer>
      </div>
    );
  }
}

export default ProfilePage;
