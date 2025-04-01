// UTILS
import { useUpdateCharacterMutation } from "../../Utils/redux/service/marvelsData";
import { useGetCharactersByIdQuery } from "../../Utils/redux/service/marvelsData";

// Components
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditForm = () => {
  const { id } = useParams();
  const character = useGetCharactersByIdQuery(id);
  const { refetch } = useGetCharactersByIdQuery(id);
  const navigate = useNavigate();
  const [updateCharacter, { data, error, isLoading }] =
    useUpdateCharacterMutation();

  const [updateData, setUpdateData] = useState({
    name: character.data.name || "",
    alias: character.data.alias || "",
    alignment: character.data.alignment || "",
    image_url: character.data.image_url || "",
    powers: character.data.powers || "",
  });

  useEffect(() => {
    if (character.data) {
      setUpdateData({
        name: character.data.name || "",
        alias: character.data.alias || "",
        alignment: character.data.alignment || "",
        image_url: character.data.image_url || "",
        powers: character.data.powers || "",
      });
    }
  }, [character.data]);

  if (error) {
    return null;
  }

  const handleChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleCharacterEdit = async (e) => {
    e.preventDefault();

    try {
      await updateCharacter({ id, ...updateData });
      await refetch();
      navigate(-1);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="new-form-container">
      <h1 className="new-character-header">Edit Character!</h1>
      <Form className="new-character-form" onSubmit={handleCharacterEdit}>
        <Form.Group controlId="name">
          <Form.Label className="new-form-label">Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={updateData.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="alias">
          <Form.Label className="new-form-label">Alias</Form.Label>
          <Form.Control
            type="text"
            name="alias"
            placeholder={character.data.alias}
            value={updateData.alias}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="alignment">
          <Form.Label className="new-form-label">Alignment</Form.Label>
          <Form.Control
            type="text"
            name="alignment"
            placeholder={character.data.alignment}
            value={updateData.alignment}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="image_url">
          <Form.Label className="new-form-label">Image</Form.Label>
          <Form.Control
            type="text"
            name="image_url"
            placeholder={character.data.image_url}
            value={updateData.image_url}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="powers">
          <Form.Label className="new-form-label">Powers</Form.Label>
          <Form.Control
            type="text"
            name="powers"
            placeholder={character.data.powers}
            value={updateData.powers}
            onChange={handleChange}
          />
        </Form.Group>

        <Button className="new-form-button" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EditForm;
