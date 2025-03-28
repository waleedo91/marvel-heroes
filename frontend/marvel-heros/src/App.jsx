// Utils
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/home/Home";
import NotFound from "./Pages/notFound/NotFound";

// Components
import Navigation from "./Components/navigation/Navigation";
import Footer from "./Components/footer/Footer";
import Characters from "./Pages/characters/Characters";
import CharacterPage from "./Pages/characterPage/CharacterPage";
import NewCharacter from "./Pages/newCharacter/NewCharacter";
import AlignmentList from "./Pages/alignmentList/AlignmentList";

// styling
import "./App.css";

// TODO: Change placement of components for Tablets and Monitors once mobile is finished.
// TODO: Add Buttons to edit character or delete character
// TODO: Create function to for search component to be able to search for characters.
// TODO: Create a form for when a user clicks the edit button. Make sure that the inputs are prefilled with the current information.

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterPage />} />
        <Route path="/characters/add_character" element={<NewCharacter />} />
        <Route path="/:alignment" element={<AlignmentList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
