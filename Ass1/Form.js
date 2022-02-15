import react from "react";
import { Component } from "react/cjs/react.development";
class  Form extends Component{
    constructor(props){
    super(props);
    this.state={
        fullName:"",address:""
    };
}
onInputChange=(event)=>{
let{name,value}=event.target;
console.log("input changed",name,value);
if(name==="fullName"){
    this.setState({fullName:value});
}
if(name==="address"){
    this.setState({address:value});
}
}
render(){
let {FullName,Address}=this.state;
return(
    <>
    <div className="form-group">
        <label>FullName:</label>
        <input type="text" className="form-control" name="fullname" value={FullName} onChange={this.onInputChange}/>

    </div>
    <div className="form-group">
        <label>Address:</label>
        <input type="text" className="form-control" name="address" value={Address} onChange={this.onInputChange}/>

    </div>
    </>
)

}
}
export default Form;