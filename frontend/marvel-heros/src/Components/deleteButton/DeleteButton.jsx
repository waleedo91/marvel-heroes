// Components
import { Button } from "react-bootstrap";

// Styling
import "./DeleteButton.css";

function DeleteButton() {
  return (
    <div>
      <Button variant="danger" className="delete-button">Delete</Button>
    </div>
  );
}

export default DeleteButton;
