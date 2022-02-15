import React from "react";
function NameListExample(){
    const courses=["java","angular","React"]
    return(
<div>
{
    courses.map(course=>{

        return <h2>{course}</h2>
    })

}
</div>


    )

}export default NameListExample;