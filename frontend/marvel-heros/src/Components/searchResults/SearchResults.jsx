// Components
import { Link } from "react-router-dom";

// Styling
import { Card } from "react-bootstrap";
import "./SearchResults.css";

const SearchResults = ({ results }) => {
  if (!results.length) return <p>No Results Found</p>;
  return (
    <div className="search-list-container">
      {results.map((char) => (
        <Card key={char.id} className="search-list-card">
          <Link to={`/characters/${char.id}`}>
            <Card.Img
              variant="top"
              src={char.image_url}
              alt={char.name}
              className="search-list-image"
            />
            <Card.Body>
              <Card.Title>{char.name}</Card.Title>
            </Card.Body>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default SearchResults;
