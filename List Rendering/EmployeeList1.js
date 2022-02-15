import React from "react";
import Employee from "../Routing/Employee";

function EmployeeList1(){
    const Employee=[
    {empid:220,name:"Nihar pandya",designation:"develeoper"},
    {empid:222,name:"Harsh Chopra",designation:"tester"},
    {empid:223,name:"Anish Vaidya",designation:"Manager"}
]
const Emply=Employee.map(emp=>{
    return <h2>hii am {emp.name} i am a {emp.designation} and my id is {emp.empid}</h2>
});
return(
<>
<h2>{Emply}</h2>
</>
)
}
export default EmployeeList1;