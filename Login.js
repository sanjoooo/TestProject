import React, { useState } from 'react';
import {useEffect} from 'react';
import axios from 'axios';
function Login() {
const [userdata,setUser]=useState([]);
const [userId, setUserId] = useState();
const [password, setPassword] = useState();
const [msg,setMsg]=useState('');
const getUdata = ()=>{
    axios.get("http://localhost:8181/login").then(response=>{
            console.log(response.data);
            setUser(response.data);
             response.data.forEach((item)=>{
                console.log(item.userName);
            })
    })
}
useEffect(()=>{
    getUdata();
},[])

    const onSubmit =()=>{
        console.log("submit", userId,password);
        
       userdata.forEach((item)=>{
         if(userId ===item.userName && password===item.password && item.adminfound === false)
        {
            console.log("user login");
            setMsg("Successfully logged in");
       }
         else{
             setMsg("Enter Valid Username or Password");
        }
         })
    }

//  }

    return (
        <>
         <div className='app'>
        
             <div className='login-form'>
                 <div className='form'>
                 <h4 className='text-center text-success'>Login Form</h4>
                 <form onSubmit={onSubmit}>
                <div className="container container-fluid alert alert-success">{msg}</div>
                <div className="form-group">
                    <label>User</label>
                    <input type="text" className="form-control" onChange={(e)=>setUserId(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <br></br>
                <div className="form-group">
                    <button type="submit" className='btn btn-primary'>Submit</button>
                </div>
            </form>
            {/* <Link className="btn btn-primary mt-2" to="/signup">Register here</Link> */}
                 </div>
             </div>
         </div>
        </>
    )
}
export default Login;