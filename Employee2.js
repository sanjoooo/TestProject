import axios from 'axios';
import React,{Component} from 'react';
class Employee2 extends Component
{
    constructor()
    {
        super();
        this.state = {allDesignation:[]};
    }
    componentDidMount()
    {
        axios.get("http://localhost:4000/Designation").then(response=>{
            this.setState({allDesignation:response.data});
        })
    }
    onChangeDDL = (e)=>{
        let { value } = e.target;
        console.log(value);
    }
    render()
    {
        let { allDesignation } = this.state;
        return(
            <>
            <h1>Fill Designation in DDL</h1>
            <select onChange={this.onChangeDDL}>
                {allDesignation.map((item,idx)=>{
                    return(
                        <option key={idx} value={item.id}>{item.designationName}</option>
                    )
                })}
            </select>
         
            </>
        )
    }
}
export default Employee2;