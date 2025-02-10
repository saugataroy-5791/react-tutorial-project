import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import LOGO_URL from "./../../assets/react.svg";

const Header = () => {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={LOGO_URL}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="align-items-lg-center">
              <SearchBar />
              <Nav.Link href="#signin">Sign in</Nav.Link>
              <Nav.Link href="#fav">Favourites</Nav.Link>
              <Nav.Link href="#cart">Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
