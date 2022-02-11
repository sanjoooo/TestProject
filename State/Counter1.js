import React,{Component} from 'react';
class Counter1 extends Component{
    constructor(props){
        super(props);
        this.state={
            total:0
        }
    }
    getValueIncrement=(value)=>{
        let{total}=this.state;
        total=total+value;
        this.setState({total})
    }
    render(){
return(
<>
<h1>Counter:{this.state.total}</h1>
<button onClick={()=>this.getValueIncrement(10)}>10</button>
<button onClick={()=>this.getValueIncrement(20)}>20</button>
<button onClick={()=>this.getValueIncrement(30)}>30</button>
<button onClick={()=>this.getValueIncrement(40)}>40</button>

</>
)
    }
}
export default Counter1;