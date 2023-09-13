import "./App.css";
import { Routes, Route } from "react-router-dom";
import Example from "./pages/Example";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/example" element={<Example />} />
    </Routes>
  );
}

export default App;
