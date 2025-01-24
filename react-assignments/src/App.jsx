import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Homepage from "./Components/Homepage/Homepage";
import EffectsComponent from "./Components/Effect/EffectsComponent";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";
import PropsComponent from "./Components/MyStateComponent/PropsComponent";

function App() {
  const person = {
    name: "John",
    info: {
      age: 25,
      city: "New York",
      job: "Developer",
      hobbies: ["reading", "coding", "gaming"],
    },
  };

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/props" element={<PropsComponent person={person} />} />
        <Route path="/state" element={<MyStateComponent />} />
        <Route path="/effects" element={<EffectsComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
