import React,{useEffect} from "react";
import { Link } from "react-router-dom";

function Error(){

    useEffect(()=>{
        document.title='Page Not Found'
    },[])

    return(
        <>
        <div className="text-center">
        <h1 className=' text-danger mt-5 pt-5'>WE ARE SORRY, PAGE NOT FOUND!</h1> 
            <p className="mb-5 mt-4">
                The page you are looking for not available...........
            </p> 
            <Link to='/' className='btn btn-lg btn-outline-primary'>Go Back to Home</Link>
        </div>
            
        </>
    )
}

export default Error;