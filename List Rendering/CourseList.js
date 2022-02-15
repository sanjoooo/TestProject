import React from "react";
function CourseList(){
    const course=[
        "java","angular","react","python"
    ];
    const cl=course.map(c=>{
return <h2>{c}</h2>
    });
    return(
        <div>
        <h2>{cl}</h2>
        </div>
    )
}
export default CourseList;