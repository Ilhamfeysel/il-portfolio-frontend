import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
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
        <AIAssistant />
      </main>
    </>
  );
}

export default App;