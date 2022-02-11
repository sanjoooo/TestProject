import React,{Component} from 'react';
class Counter extends Component{

constructor(props){
    super(props);
this.state={
counter:0
}
}
getIncrement=()=>{
let{counter}=this.state
counter++
this.setState({counter})
}

render(){
    return(
      <>
      <h1>Counter Increment</h1>
      <div>counter:{this.state.counter}</div>
      <button onClick={()=>this.getIncrement()}>Click here</button>
      </>  
    )
}
}export default Counter;