import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Character from "./components/Character";
import Locations from "./pages/Locations";
import Episodes from "./pages/Episodes";
import Location from "./components/Location";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<Character />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:id" element={<Location />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
