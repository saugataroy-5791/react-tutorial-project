import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import LOGO_URL from "./../../assets/react.svg";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "./header.scss";

const Header = () => {
  const [loginText, setLoginText] = useState("Login");
  const handleChildData = (data) => {
    console.log("Message from Child:", data);
  };

  const handleLoginClick = () => {
    loginText === "Login" ? setLoginText("Logout") : setLoginText("Login");
  };

  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                alt="logo"
                src={LOGO_URL}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              React
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="align-items-lg-center">
              <SearchBar sendData={handleChildData} />
              <Link className="nav-link me-2" to="/favourites">
                Favourites
              </Link>
              <Link className="nav-link me-4" to="/basket">
                Cart
              </Link>
              <Button
                variant="outline-light"
                className="login-btn"
                onClick={handleLoginClick}
              >
                {loginText}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
