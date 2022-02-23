import React from "react";
export default function Displaydetails(props){
const onDisplaydetailsUpdate=()=>{
    
    const myValue1=10;
    props.update(myValue1);
}

return(
    <>
    <h4>Displaydetails</h4>
    <button className="btn btn-primary"onClick={onDisplaydetailsUpdate}>Click</button>
    </>
)
}