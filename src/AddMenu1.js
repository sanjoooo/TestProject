import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
function AddMenu1() {
  const [userdata, setUser] = useState([]);
  const [userId, setUserId] = useState();
  const [password, setPassword] = useState();
  const [msg, setMsg] = useState("");

  const addData = () => {
    axios.get("http://localhost:8181/user").then((response) => {
      console.log(response.data);
      setUser(response.data);
      // response.data.forEach((item)=>{
      //     console.log(item.userName);
      // })
    });
  };
  useEffect(() => {
    addData();
  }, []);

  const navigate = useNavigate();
  const onSubmit = () => {
    // console.log("USERNAME",data1.obj1);
    userdata.forEach((item) => {
      if (
        userId === item.userName &&
        password === item.password &&
        item.adminfound === true
      ) {
        navigate("/menucard");
    //   } else if (
    //     userId === item.userName &&
    //     password === item.password &&
    //     item.adminfound === true
    //   ) {
    //     console.log("admin login");
    //     navigate("/admin");
    //   } else {
    //     setMsg("Enter Valid Username or Password");
    //   }
    // });
  };
  return (
    <>
      <div className="app">
        {/* <Link to="/" className='btn btn-success'>Home</Link> */}
        <div className="login-form container col-md-4">
          <div className="form">
            <form onSubmit={onSubmit}>
              <h4 className="text-center text-success">Login Form</h4>
              <div className="container container-fluid alert alert-success">
                {msg}
              </div>
              <div className="form-group">
                <label>User</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setUserId(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <br></br>
              <div className="form-group">
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </form>
            <br></br>
            <div>
              <Link to="/">Register here</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddMenu1;
