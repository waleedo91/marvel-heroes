// Utils
import { useGetAllCharactersQuery } from "../../Utils/redux/service/marvelsData";
import Loading from "../loading/Loading";

// Components
import { Link } from "react-router-dom";

// Styling
import { Card } from "react-bootstrap";
import "./HeroList.css";

const HeroList = () => {
  const { data, error, isLoading } = useGetAllCharactersQuery();

  if (error) {
    return null;
  }

  return (
    <div>
      <h1 className="heroes-list">Earth's Mightiest</h1>
      {!isLoading ? (
        <div className="character-list-container">
          {data?.map((char) =>
            char.alignment === "hero" ? (
              <Card key={char.id} className="character-list-card">
                <Link to={`/characters/${char.id}`}>
                  <Card.Img
                    variant="top"
                    src={char.image_url}
                    alt={char.name}
                    className="character-list-image"
                  />
                  <Card.Body>
                    <Card.Title>{char.name}</Card.Title>
                  </Card.Body>
                </Link>
              </Card>
            ) : null
          )}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default HeroList;
