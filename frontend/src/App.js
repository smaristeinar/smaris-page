import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./routes/Hero";
import Portfolio from "./routes/Portfolio";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App bg-slate-100 min-h-screen">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
