// UTILS
import { useAddNewCharacterMutation } from "../../Utils/redux/service/marvelsData";

// Components
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

// Styling
import "./NewForm.css";

const NewForm = () => {
  const [addNewCharacter, { data, error, isLoading }] =
    useAddNewCharacterMutation();
  const [newHeroData, setNewHeroData] = useState({
    name: "",
    alias: "",
    alignment: "",
    image_url: "",
    powers: "",
  });

  if (error) {
    return null;
  }

  const handleChange = (e) => {
    setNewHeroData({ ...newHeroData, [e.target.name]: e.target.value });
  };

  const handleAddCharacter = async (e) => {
    e.preventDefault();
    try {
      await addNewCharacter(newHeroData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="new-form-container">
      <h1 className="new-character-header">Create Character!</h1>
      <Form className="new-character-form" onSubmit={handleAddCharacter}>
        <Form.Group controlId="name">
          <Form.Label className="new-form-label">Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Character Name"
            value={newHeroData.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="alias">
          <Form.Label className="new-form-label">Alias</Form.Label>
          <Form.Control
            type="text"
            name="alias"
            placeholder="Enter Character Name"
            value={newHeroData.alias}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="alignment">
          <Form.Label className="new-form-label">Alignment</Form.Label>
          <Form.Control
            type="text"
            name="alignment"
            placeholder="Enter Character Name"
            value={newHeroData.alignment}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="image_url">
          <Form.Label className="new-form-label">Image</Form.Label>
          <Form.Control
            type="text"
            name="image_url"
            placeholder="Enter Character Name"
            value={newHeroData.image_url}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="powers">
          <Form.Label className="new-form-label">Powers</Form.Label>
          <Form.Control
            type="text"
            name="powers"
            placeholder="Enter Character Name"
            value={newHeroData.powers}
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

export default NewForm;
