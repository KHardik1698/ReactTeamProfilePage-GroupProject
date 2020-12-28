import {Component} from "react";
// import {Link} from "react-router-dom";

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            employees : [],
        }
    }

    // componentDidMount = (event) => {
    //     fetch(url)
    //     .then((response)=>{
    //         return response.json();
    //     })
    //     .then((data)=>{
    //         console.log(data);
    //         this.setState({employees: data});
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // }

    render(){
        return(
            <div>Employee Cards</div>
            // <div>
            //     {
            //         this.state.employees.map((employee)=>{
            //             return(
            //                 // <div>
            //                 //     <img src={employee.imageUrl} alt="employee-profilePicture"/>
            //                 //     <Link to={`/employees/${employee.id}`}>
            //                 //         <p>{employee.name}</p>
            //                 //     </Link>
            //                 //     <p>{employee.company}</p>

            //                 // </div>
            //             )
            //         })
            //     }
            // </div>
        )
    }
}

export default Home;