// Utils
import { useGetAllCharactersQuery } from "../../Utils/redux/service/marvelsData";
import { Link } from "react-router-dom";

// Components
import Loading from "../loading/Loading";

// Styling
import "./CharacterList.css";
import { Card } from "react-bootstrap";

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
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default CharacterList;
