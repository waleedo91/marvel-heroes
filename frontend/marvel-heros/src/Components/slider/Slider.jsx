// Components
import { Link } from "react-router-dom";

// Styling
import "./Slider.css";
import { Carousel, Button } from "react-bootstrap";

// Images
import marvelHeroes from "../../Utils/Images/Magnificent-Marvel-Wallpaper-1024x658.jpg";
import marvelVillains from "../../Utils/Images/marvel-villains-mcu-movie-ddjks3yd194jmw46.jpg";
import marvelTop from "../../Utils/Images/OpenGraph-TW-1200x630.jpg";

// TODO: Add buttons to specific pages of the website. Heroes, Villains and just the general list.

function Slider() {
  return (
    <div className="slider-container">
      <Carousel fade className="carousel">
        <Carousel.Item className="carousel-item slide-1">
          <img src={marvelTop} className="slide-image" />
          <Carousel.Caption className="slide-text">
            <h3>Marvel's Initiative</h3>
            <p>
              The Roster of Marvel's greatest Heroes and Villains. Get the
              information you need to understand your favorite heroes and the
              worse villains. Welcome to the Marvel's Initiative
            </p>
            <Link to="/characters">
              <Button variant="warning">Check the Roster</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item slide-2">
          <img src={marvelHeroes} className="slide-image" />
          <Carousel.Caption className="slide-text">
            <h3>The World's Mightiest</h3>
            <p>
              Check out the Marvel heroes and get the information you need about
              worlds mightiest! Have someone in mind and their not on the list,
              make sure to add them to the roster!
            </p>
            <Button variant="warning">The Heroes</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item slide-3">
          <img src={marvelVillains} className="slide-image" />
          <Carousel.Caption className="slide-text">
            <h3>The World's Evildoers</h3>
            <p>
              The Villains and the worse beings the universe can provide!
              Depending on your opinion of course. Feel otherwise? Share your
              character or even update the character to make an attempt to prove
              to the world that they are misunderstood!{" "}
            </p>
            <Button variant="warning">The Villains</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
