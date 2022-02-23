import React, { Component } from 'react';
class DisplayDetails extends Component {
    constructor(props)
    {
        super();
        console.log("DisplayDetails ... constructor");
    }
    componentDidMount()
    {
        console.log("DisplayDetails ... componentDidMount");
    }
   
    shouldComponentUpdate(props1)
    {
        console.log(props1)
        return true;
    }
    componentWillUnmount(){
        console.log("DisplayDetails ... componentWillUnmount");
    }
    componentDidUpdate()
    {
        console.log("DisplayDetails ... componentDidUpdate");
    }
    render()
    {
        let { counter } = this.props;
        console.log("DisplayDetails ...render");
       return(
            <>
              <h1>Display Details Counter {counter}</h1>
            </>
        )
    }

}

export default DisplayDetails;