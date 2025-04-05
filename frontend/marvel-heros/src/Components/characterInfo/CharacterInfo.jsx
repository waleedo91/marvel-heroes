// UTILS
import { useParams, Link } from "react-router-dom";
import { useGetCharactersByIdQuery } from "../../Utils/redux/service/marvelsData";
import { useDeleteCharacterMutation } from "../../Utils/redux/service/marvelsData";

// Components
import { useNavigate } from "react-router-dom";

// Styling
import { Button, Card } from "react-bootstrap";
import "./CharacterInfo.css";

const CharacterInfo = () => {
  const { id } = useParams();
  const character = useGetCharactersByIdQuery(id);
  const [deleteCharacter, { error, isLoading }] = useDeleteCharacterMutation();
  const navigate = useNavigate();

  if (error) {
    return null;
  }

  const handleDelete = async () => {
    try {
      await deleteCharacter(id);
      alert("Character Deleted");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

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
        <Link to={`/characters/edit-form/${id}`}>
          <Button className="edit-button">Edit</Button>
        </Link>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default CharacterInfo;
