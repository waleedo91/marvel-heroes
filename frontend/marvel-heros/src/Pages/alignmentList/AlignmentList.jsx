// Components
import HeroesList from "../../Components/heroList/HeroList";
import VillainList from "../../Components/villainList/VillainList";
import { useParams } from "react-router-dom";

// Styling
import "./AlignmentList.css";

const AlignmentList = () => {
  const { alignment } = useParams();
  console.log(alignment);

  return (
    <div className="character-list-container">
      {alignment === "heroes" ? <HeroesList /> : <VillainList />}
    </div>
  );
};

export default AlignmentList;
