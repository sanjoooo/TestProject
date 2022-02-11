import React, { Component } from 'react';
class Display77 extends Component {
    // constructor() {
    //     super();
    //     this.state = { FullName: '', address: '', Phone: '' };
    // }
    onChangeHandler = (e)=>{
        // console.log(e.target.value);
    }
    onKeyUpHandler = (e)=>{
        console.log("onKeyUpHandler ", e.key, e.keyCode);
    }
    onKeyPress = (e)=>{
        console.log("onKeyPress ", e.key);
    }
    onKeyDown =(e)=>{
        console.log("onKeyDown ", e.key);
    }
    render() {
        return (
            <>
                <div className='form-group'>
                    <label>Full Name</label>
                    <input type="text" className="form-control" onChange={this.onChangeHandler} onKeyUp={this.onKeyUpHandler} onKeyPress={this.onKeyPress} onKeyDown={this.onKeyDown} />
                </div>
            </>
        )
    }
}

export default Display77