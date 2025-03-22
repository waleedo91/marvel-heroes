// Utils
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/home/Home";

// Components
import Navigation from "./Components/navigation/Navigation";
import Footer from "./Components/footer/Footer";

// styling
import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      {/* <Routes></Routes> */}
      <Home />
      <Footer />
    </>
  );
}

export default App;
