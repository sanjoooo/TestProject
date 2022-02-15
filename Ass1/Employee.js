import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react/cjs/react.production.min";

class Employee extends Component{
constructor(props){
    super(props);
this.state=
   {EmpId:120,EmpName:"Aarushi Datta",Salery:45000};

}
render(){
    return(
        <>
        <p>{this.state.EmpId}</p>
        <p>{this.state.EmpName}</p>
        <p>{this.state.Salery}</p>
        </>
    )
}
}
export default Employee;