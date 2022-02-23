import React, { Component } from 'react';
import DisplayDetails from './DisplayDetails';

class Display extends Component {
    constructor(props)
    {
        super();
        this.state = {Counter:10, showChild:false};
        console.log("Display ... Constructor");
    }
    componentDidMount()
    {
        // calling api
        console.log("Display .... componentDidMount");
    }
    onCounter = ()=>{
        let { Counter } = this.state;
        Counter++;
        this.setState({Counter});
    }
    onShowChild = ()=>
    {
        let {showChild } = this.state;
        this.setState({showChild:!showChild});
    }
    componentDidUpdate()
    {
        console.log("Display ... componentDidUpdate");
    }

    render()
    {
    console.log("Display ... Render");
    let { Counter,showChild } = this.state;
       return(
            <>
            <h1>Display {Counter}</h1>
            <button className='btn btn-primary' onClick={this.onCounter}>Counter</button>
            <button className='btn btn-primary' onClick={this.onShowChild}>Show Child</button>
              {showChild ? <DisplayDetails counter={Counter}/> : null}
            </>
        )
    }

}

export default Display;