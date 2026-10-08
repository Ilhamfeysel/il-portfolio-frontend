import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Journey from "./sections/Journey";
import AIAssistant from "./sections/AIAssistant";

function App() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Skills />
        <Journey />
        <AIAssistant />
      </main>
    </>
  );
}

export default App;