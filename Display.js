import React from 'react';
function Display(props){
    return(
<>
    <h1>This is my display component</h1> 
    <h3>{props.mytitle}</h3>
    </>  
    )
}
export default Display;