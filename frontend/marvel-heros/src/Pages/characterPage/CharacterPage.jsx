//  TODO: Use Params will work fine here to fetch the correct character information.
import { useParams } from "react-router-dom";

const CharacterPage = () => {
  const { id } = useParams();
  console.log(id);

  return <div>Hello world</div>;
};

export default CharacterPage;
