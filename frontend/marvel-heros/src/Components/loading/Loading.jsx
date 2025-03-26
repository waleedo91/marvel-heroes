import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <Spinner animation="border" variant="warning" role="status">
      <span>Heroes Assembling!</span>
    </Spinner>
  );
};

export default Loading;
