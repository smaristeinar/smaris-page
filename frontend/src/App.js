import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./routes/Hero";
import Portfolio from "./routes/Portfolio";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App bg-sky-500 min-h-screen">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
