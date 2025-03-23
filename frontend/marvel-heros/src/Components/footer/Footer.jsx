// Styling
import "./Footer.css";
import { Navbar, Container } from "react-bootstrap";

// Images
import marvelBrand from "../../Utils/Images/marvel-logo-chromebook-wallpaper.jpg";

function Footer() {
  return (
    <div>
      <Navbar className="footer" sticky="bottom">
        <Container>
          <Navbar.Brand href="#home">
            <img className="marvel-footer" src={marvelBrand} />
            <strong className="copy-right">&copy;</strong>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
