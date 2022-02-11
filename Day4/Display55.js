
import { Component } from "react/cjs/react.production.min";
import React from "react";
class Display55 extends Component{
constructor(props){
super(props)
this.state={
FullName:" ",Address:" ",Phone:" "
};
}
onSubmitHandler=(e)=>{
    e.preventDefault();
    console.log("submitted");
}
render(){
    return(
<>
<form onSubmit={this.onSubmitHandler}>
<div className="form-group">
<label>FullName:</label>
<input type="text" className="form-control"/>
</div>
<div className="form-group">
<label>Address:</label>
<input type="text" className="form-control"/>
</div>
<div className="form-group">
 <label>Phone</label>
<input type="text" className="form-control"/>
</div>
<div className="form-group">
    <button className="btn btn-primary"type="submit">Submit</button>
</div>
</form>
</>
    )
}
}export default Display55;