// Utils
import { useGetAllCharactersQuery } from "../../Utils/redux/service/marvelsData";
import { Link } from "react-router-dom";

// Styling
import "./CharacterList.css";
import { Spinner, Card } from "react-bootstrap";

const CharacterList = () => {
  const { data, error, isLoading } = useGetAllCharactersQuery();

  if (error) {
    return null;
  }

  return (
    <>
      {!isLoading ? (
        <div className="character-list-container">
          {data?.map((char) => (
            <Card className="character-list-card">
              <Link to={`/character/${char.id}`}>
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
          ))}
        </div>
      ) : (
        <Spinner animation="border" variant="warning" role="status">
          <span>Heroes Assembling!</span>
        </Spinner>
      )}
    </>
  );
};

export default CharacterList;
