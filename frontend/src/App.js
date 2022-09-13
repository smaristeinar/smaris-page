import "./App.css";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App bg-sky-500 h-screen">
      <Nav />
      <Hero />
    </div>
  );
}

export default App;
