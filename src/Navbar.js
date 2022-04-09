import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <br></br>
      <Navbar bg="black" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-end">
          
            <Nav.Link href="#action1">
              {" "}
              <Link to="/signup" className="btn btn-dark">
                Sign Up
              </Link>
            </Nav.Link>
            <Nav.Link href="#action2">
              {" "}
              <Link to="/login" className="btn btn-dark">
                Log in
              </Link>
            </Nav.Link>
            <Nav.Link href="#action2">
              {" "}
              <Link to="/signout" className="btn btn-dark">
                SignOut
              </Link>
            </Nav.Link>
              <Nav.Link href="#action1">
              {" "}
              <Link to="/" className="btn btn-dark">
                Home
              </Link>
            </Nav.Link>
            {/* </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div className="home-page">
        <center>
          <h2 className="home-header">!</h2>
        </center>
      </div> */}
    </>
  );
}
export default Home;
