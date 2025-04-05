// Components
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Pages
import SearchResults from "../searchResults/SearchResults";

// Styling
import "./Navigation.css";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";

// Images
import marvelBrand from "../../Utils/Images/marvel-logo-chromebook-wallpaper.jpg";

function Navigation() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchInput)}`);
      setSearchInput("");
    }
  };

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
            <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchInput}
                onChange={handleChange}
              />
              <Button type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
