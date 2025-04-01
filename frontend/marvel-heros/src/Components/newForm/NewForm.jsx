// Components
import { Form, Button } from "react-bootstrap";

// Styling
import "./NewForm.css";

const NewForm = () => {
  return (
    <div className="new-form-container">
      <h1 className="new-character-header">Create Character!</h1>
      <Form className="new-character-form">
        <Form.Group>
          <Form.Label className="new-form-label">Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Character Name" />
        </Form.Group>
        <Form.Group>
          <Form.Label className="new-form-label">Alias</Form.Label>
          <Form.Control type="text" placeholder="Enter Character Alias" />
        </Form.Group>
        <Form.Group>
          <Form.Label className="new-form-label">Alignment</Form.Label>
          <Form.Control type="text" placeholder="Enter Character Alignment" />
        </Form.Group>
        <Form.Group>
          <Form.Label className="new-form-label">Image</Form.Label>
          <Form.Control type="text" placeholder="Enter Character Image URL" />
        </Form.Group>
        <Form.Group>
          <Form.Label className="new-form-label">Powers</Form.Label>
          <Form.Control type="text" placeholder="Enter Character Powers" />
        </Form.Group>
        <div className="new-form-button">
          <Button>Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default NewForm;
