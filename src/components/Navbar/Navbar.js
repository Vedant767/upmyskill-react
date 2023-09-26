import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import COMMON_CONSTANTS from "../../Constants/CommonConstants";

const NavbarCustomComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className=" justify-content-end "
          id="basic-navbar-nav"
        >
          <Nav>
            <Nav.Link href="#home">
              {COMMON_CONSTANTS.LABEL.HOME.toUpperCase()}
            </Nav.Link>
            <Nav.Link href="#link">
              {COMMON_CONSTANTS.LABEL.ABOUT.toUpperCase()}
            </Nav.Link>
            <Nav.Link href="#link">
              {COMMON_CONSTANTS.LABEL.WHY_US.toUpperCase()}
            </Nav.Link>
            <Nav.Link href="#link">
              {COMMON_CONSTANTS.LABEL.SERVICES.toUpperCase()}
            </Nav.Link>
            <Nav.Link href="#link">
              {COMMON_CONSTANTS.LABEL.PRICES.toUpperCase()}
            </Nav.Link>
            <Nav.Link href="#link">
              {COMMON_CONSTANTS.LABEL.CALENDAR.toUpperCase()}
            </Nav.Link>
            <Nav.Link href="#link">
              {COMMON_CONSTANTS.LABEL.TISAX.toUpperCase()}
            </Nav.Link>
            <Nav.Link href="#link">
              {COMMON_CONSTANTS.LABEL.CONTACT.toUpperCase()}
            </Nav.Link>
            <Nav.Link href="#link">
              {COMMON_CONSTANTS.LABEL.FAQ.toUpperCase()}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCustomComponent;
