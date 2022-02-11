import React from "react";
import { Component } from "react/cjs/react.development";

class Display33 extends Component{

    constructor(props){
    super(props)
    this.state={
        trnchecked:false

    }
    }
    onChecck=()=>{
        let{trnchecked}=this.state
        this.setState({trnchecked:!trnchecked});
    
    }
    render(){
        let{trnchecked}=this.state
        return(
            <div>
            Training:<input type="checkbox" checked={trnchecked}/><br/>
            <button className="btn btn-primary"onClick={this.onChecck}>check</button>
            </div>
        ) 
    }
}export default Display33;