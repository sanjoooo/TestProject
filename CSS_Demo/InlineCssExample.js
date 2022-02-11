import React from 'react';
function InlineCssExample(){

const applystyle={

color:"black",
backgroundColor:"grey",
padding:"10px",
fontFamily:"Arial"
};
return(
    <div>
<h1 style={{color:"white",backgroundColor:"lightblue"}}>Hello World</h1>
<h1>Namste React</h1>
<div style={applystyle}>Welcome in the beautiful world of React</div>
    </div>
)
}export default InlineCssExample