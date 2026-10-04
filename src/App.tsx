import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Journey from "./sections/Journey";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Skills />
        <Journey />
      </main>
    </>
  );
}

export default App;