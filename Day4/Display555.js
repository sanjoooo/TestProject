import React from "react";
import { Component } from "react/cjs/react.production.min";
class Display555 extends Component{

constructor(props){
    super();
    this.state={
FullName:" ",Address:"",PhoneNo:" "
    };
}
onSubmithandler=(e)=>{
    e.preventDefault();
    console.log("submitted");
}
render(){
   return (
        <>
        <form onSubmit={this.onSubmithandler}>
<div className="form-group">
<label>FullName:</label>
<input tyep="text" className="form-control" placeholder="Please enter Your name"/>
</div>

<div className="form-group">
<label>Address:</label>
<input type="text" className="form-control" placeholder="Enter Address"/>
</div>

<div className="form_group">
    <label>PhoneNo:</label>
    <input type="text" className="form-control" placeholder="Enter Phone Number"/>
</div>
<div className="form-group">
    <button className="btn btn-succcess" type="submit">submit</button>
</div>
        </form>
        
        
        
        </>
    )
}
}export default Display555;