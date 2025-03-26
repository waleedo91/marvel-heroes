// Utils
import { useGetAllCharactersQuery } from "../../Utils/redux/service/marvelsData";
import Loading from "../loading/Loading";

// Components
import { Link } from "react-router-dom";

// Styling
import { Card } from "react-bootstrap";
import "./VillainList.css";

const VillainList = () => {
  const { data, error, isLoading } = useGetAllCharactersQuery();

  if (error) {
    return null;
  }

  return (
    <div>
      {!isLoading ? (
        <div className="villain-list-container">
          {data?.map((char) =>
            char.alignment === "villain" ? (
              <Card key={char.id} className="villain-list-card">
                <Link to={`/characters/${char.id}`}>
                  <Card.Img
                    variant="top"
                    src={char.image_url}
                    alt={char.name}
                    className="villain-list-image"
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

export default VillainList;
