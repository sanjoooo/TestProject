import React, {Component } from 'react';
import axios from 'axios';
class Emp extends Component
{
    constructor()
    {
        super();
        this.state = {Emp:[]};
    }
    componentDidMount()
    {
        axios.get("http://localhost:4000/Emp").then(response=>{
            this.setState({Emp:response.data});
        })
    }
    render()
    {
        let { Emp } = this.state;
        console.log(Emp);
        return(
            <>
            <h1>Emp </h1>
            <table className="table">
            <tbody>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>City</th>
            </tr>
                {Emp.map((item,idx)=>{
                    return(
                        <tr key={idx}>
                            <td>{item.id}</td>
                            <td>{item.employeeName}</td>
                            <td>{item.address}</td>
                            <td>{item.city}</td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
            </>
        )
    }
}
export default Emp;