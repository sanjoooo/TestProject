import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

function Signup3(){
    const [user,setUser]=useState({
        userName:'',email:'',password:'',confirmPassword:'',adminfound:false
    })
    const [hasError,setHasError]=useState(true)
    const [errors,setErrors]=useState({})

    const navigate = useNavigate()

//  useEffect(()=>{
   
    // change Handler Function
    const handleChange=e=>{
        let {name,value}=e.target
        setUser({...user,[name]:value})
        setErrors({
            ...errors,[name]:validate(name,value)
        })
    // }

    // Input field validations
    const validate=(name,value)=>{
       
        if(user.userName===' '){
            setHasError(true)
            return "Username should not be empty";
            
        }
        if(name==='email' && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.toLowerCase()))
        {
            setHasError(true)
            return 'Enter Valid Email'
        }
        if(name === 'password' && !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,}$/.test(value))
        {
            setHasError(true)
            return "Minimum password length should be 6 characters. Password must have at least one special symbol, digit, one uppercase and one lowercase letter."
        }
        if(name==='confirmPassword' && user.password != value)
        {
            setHasError(true)
            return "Password did not match"
        }
        else
        {
            setHasError(false)
        }
    }

    // Signup function
    const signupHandler=e=>{
        e.preventDefault()
        let {userName,email,password,confirmPassword} = user
        if(! userName|| ! email|| ! password|| ! confirmPassword)
        {
            alert("Please fill out all the fields"
            )
        }
         else
         {
            axios.post('http://localhost:8181/user/addUser',user)
            .then(res=>{
                console.log(res.status)
                if (res.status==200)
                {
                   alert("Registered Successfully")
                    
                    setUser({userName:'',email:'',password:'',confirmPassword:''})
                }
            
            })
          
        }
    }
    return(
        <>
        <div className='container col-md-4'>
            <h2>Create Account</h2>
            {/* <Link to='/signin' >Already a user? Login</Link><br/><br/> */}
            <form method='post'>
                <div className='form-group'>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter userName"  
                        name='userName' 
                        required
                        value={user.userName} 
                        onChange={(e)=>handleChange(e)}
                    />
                    <p className='text-danger'>{errors.userName}</p>
                </div>
                <div className='form-group'>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter Email"  
                        name='email' 
                        required
                        value={user.email} 
                        onChange={(e)=>handleChange(e)}
                    />
                    <p className='text-danger '>{errors.email}</p>
                </div>
                <div className='form-group'>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter Password"  
                        name='password' 
                        required
                        value={user.password} 
                        onChange={(e)=>handleChange(e)}
                    />
                    <p className='text-danger'>{errors.password}</p>
                </div>
                <div className='form-group'>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Confirm password"  
                        name='confirmPassword' 
                        required
                        value={user.confirmPassword} 
                        onChange={(e)=>handleChange(e)}
                    />
                    <p className='text-danger '>{errors.confirmPassword}</p>
                </div>
                <div className="form-group">
                    <button 
                        type="submit" 
                        className="btn btn-success btn mx-4"                         
                        disabled={hasError}
                        onClick={(e)=>signupHandler(e)}> Sign up 
                    </button>
                    <button 
                        type="reset" 
                        className="btn btn-primary btn mx-4" 
                        onClick={(e)=>setUser({})}> Cancel
                    </button>
                </div>
            </form>
            <br></br>
        
                Already have an account?  <Link className="btn btn-success" to="/login">Login</Link> 
        </div>
        </>
    )
}
}
export default Signup3;