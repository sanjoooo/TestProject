import React from "react";
import { Component } from "react/cjs/react.production.min";

class Userdetails extends  Component{
    constructor(props){
        super(props);
        let{userRole}=props;
    }
    render(){
        return(
            <>
            <h1>{this.props.userRole}</h1>
            
            </>
        )

    }
}
export default Userdetails;