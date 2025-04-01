// Utils
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/home/Home";
import NotFound from "./Pages/notFound/NotFound";
import Characters from "./Pages/characters/Characters";
import CharacterPage from "./Pages/characterPage/CharacterPage";
import AlignmentList from "./Pages/alignmentList/AlignmentList";
import NewHero from "./Pages/newHero/NewHero";

// Components
import Navigation from "./Components/navigation/Navigation";
import Footer from "./Components/footer/Footer";

// styling
import "./App.css";
import EditCharacter from "./Pages/editCharacter/EditCharacter";

// TODO: Change placement of components for Tablets and Monitors once mobile is finished.
// TODO: Create Button on character page for use to be able to add a character.
// TODO: Update Buttons to go to edit form pages and to delete a hero.
// TODO: Create function for search component to be able to search for characters.
// TODO: Create a form for when a user clicks the edit button. Make sure that the inputs are prefilled with the current information.

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterPage />} />
        <Route path="/characters/new-hero" element={<NewHero />} />
        <Route path="/:alignment" element={<AlignmentList />} />
        <Route path="characters/edit-form/:id" element={<EditCharacter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
