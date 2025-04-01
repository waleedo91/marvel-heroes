// UTILS
import { useParams } from "react-router-dom";
import { useGetCharactersByIdQuery } from "../../Utils/redux/service/marvelsData";

// Components
import EditButton from "../editButton/EditButton";

// Styling
import { Card } from "react-bootstrap";
import "./CharacterInfo.css";
import DeleteButton from "../deleteButton/DeleteButton";

const CharacterInfo = () => {
  const { id } = useParams();
  const character = useGetCharactersByIdQuery(id);
  return (
    <div>
      <div className="single-character-container">
        <Card className="hero-photo-card">
          <Card.Img
            className="hero-image"
            variant="top"
            src={character.currentData?.image_url}
          />
          <Card.Body>
            <Card.Title className="hero-name">
              {character.currentData?.name}
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card className="hero-info-card">
          <Card.Body>
            <Card.Text>
              <strong>Alias: </strong>
              {character.currentData?.alias}
            </Card.Text>
            <Card.Text>
              <strong>Alignment:</strong> {character.currentData?.alignment}
            </Card.Text>
            <Card.Text>
              <strong>Powers:</strong> {character.currentData?.powers}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="button-section">
        <EditButton />
        <DeleteButton />
      </div>
    </div>
  );
};

export default CharacterInfo;
