import React from "react";

function EmployeeList(){
    const Employee=[
        {eid:125,name:"Divya"},
        {eid:126,name:"Anuj"},
        {eid:127,name:"vidhi"},
    ]
    const empp=Employee.map(emp=>{
        return <h2>{emp.eid} {emp.name}</h2>
    });
    return(
        <>
        <h2>{empp}</h2>
        </>
    )
}
export default EmployeeList;