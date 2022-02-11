import React,{Component} from "react";
class StateExample extends Component{

constructor(props){
    super();
    this.state={
message:"Hello Visitior"
    }
}
  getChange=()=>{
    
    this.setState({message:"Thank you for visiting our page"});
    console.log("clicked");
}
render(){
return(
<>
<h1>{this.state.message}</h1>
<button onClick={()=>this.getChange(30,60)}>Click Here</button>
</>
)

}
}

export default StateExample;