import React from "react";
 function EmployeeList3(){
     const Employee=["Anish","Anandi","Amey","Anish","Anika"];

      const Employeee=Employee.map((emp,index)=>{
          return <h4>{emp,index}{emp}</h4>
      });
      return (
          <div>
    {Employeee}

          </div>
      )
 }
 export default EmployeeList3;