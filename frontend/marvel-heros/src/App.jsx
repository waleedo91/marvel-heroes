// Utils
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/home/Home";

// Components
import Navigation from "./Components/navigation/Navigation";
import Footer from "./Components/footer/Footer";

// styling
import "./App.css";

// TODO: Change placement of components for Tablets and Monitors once mobile is finished.

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
