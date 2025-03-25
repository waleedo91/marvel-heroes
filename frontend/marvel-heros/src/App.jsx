// Utils
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/home/Home";

// Components
import Navigation from "./Components/navigation/Navigation";
import Footer from "./Components/footer/Footer";
import Characters from "./Pages/characters/Characters";
import CharacterPage from "./Pages/characterPage/CharacterPage";
import NewCharacter from "./Pages/newCharacter/NewCharacter";

// styling
import "./App.css";

// TODO: Change placement of components for Tablets and Monitors once mobile is finished.

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterPage />} />
        <Route path="/characters/add_character" element={<NewCharacter />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
