// Components
import { Link } from "react-router-dom";

// Styling
import "./Navigation.css";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";

// Images
import marvelBrand from "../../Utils/Images/marvel-logo-chromebook-wallpaper.jpg";

function Navigation() {
  return (
    <div className="navigation">
      <Navbar collapseOnSelect expand="lg" id="navigation-bar">
        <Container>
          <Navbar.Brand href="/">
            <img
              className="marvel-brand"
              src={marvelBrand}
              alt="Marvel brand logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link className="nav-text" href="/heroes">
                The Heroes
              </Nav.Link>
              <Nav.Link className="nav-text" href="/villains">
                The Villains
              </Nav.Link>
              <Nav.Link className="nav-text" href="/characters/new-hero">
                Add a Character
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
