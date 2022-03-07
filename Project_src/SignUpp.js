import React, {Component} from 'react';
import axios from 'axios';
class SignUpp extends Component{
    constructor()
    {
        super();
        this.state = {UserDetail:{userName:'',password:''},msg:''};
    }
    onChangeHandler=(e)=>
    {
        let {name,value}=e.target;
        let {UserDetail}=this.state;
        UserDetail.adminfound = false;
        this.setState({UserDetail:{...UserDetail,[name]:value}});
    }
    onSubmit=(e)=>{
        e.preventDefault();
       
        const URL="http://localhost:8181/login/addUser";
        axios.post(URL,this.state.UserDetail).then(response=>{
            console.log(response.data);
        })
        this.setState({msg:'User is successfully added.'});
    }
    render(){
        let {UserDetail,msg}=this.state;
        return(
            <>
            <div className='app'>
        
             <div className='login-form'>
             <div className='form'>
                 <h3>{msg}</h3>
           <form onSubmit={this.onSubmit}>
           <h4 className='text-center text-success'>Registration Form</h4>
                    <div className='form-group'>
                        <label>User Name</label>
                        <input type="text" className='form-control' name="userName" value={UserDetail.userName} onChange={this.onChangeHandler}/>
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type="password" className='form-control' name="password" value={UserDetail.password} onChange={this.onChangeHandler}/>
                    </div>
                    <div className='form-group'>
                        <button type="submit" className='btn btn-info mt-2'>Submit</button>
                    </div>
                </form>
               {/* Already have an account?  <Link className="btn btn-success" to="/login">Login</Link> */}
           </div>
             </div>
             </div>
            </>
        )
    }
}
export default SignUpp;