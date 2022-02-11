/*import React,{Component} from 'react';
import axios from 'axios';
class Employee extends Component
{
constructor(){
    super();
    this.state={Employee:[]};
}componentDidMount(){
    axios.get("http://localhost:4000/Employee").then(response=>{
        console.log(response.data);
        this.setState({Employee:response.data});
    })
}

render(){
    return(
<>
<h1>Employee</h1>
</>


    )
}
}

export default Employee;
*/

import React, {Component } from 'react';
import axios from 'axios';
class Employee extends Component
{
    constructor()
    {
        super();
        this.state = {Employee:[]};
    }
    componentDidMount()
    {
        axios.get("http://localhost:4000/Employee").then(response=>{
            this.setState({Employee:response.data});
        })
    }
    render()
    {
        let { Employee } = this.state;
        console.log(Employee);
        return(
            <>
            <h1>Employee </h1>
            <table className="table">
            <tbody>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Address</th>
            
            </tr>
                {Employee.map((item,idx)=>{
                    return(
                        <tr key={idx}>
                            <td>{item.id}</td>
                            <td>{item.employeeName}</td>
                            <td>{item.address}</td>
            
                        </tr>
                    )
                })}
            </tbody>
            </table>
            </>
        )
    }
}
export default Employee;

















