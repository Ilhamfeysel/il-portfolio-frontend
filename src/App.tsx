import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import AIAssistant from "./sections/AIAssistant";
import Research from "./sections/Research";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />

      <main>
        <Hero />
        <Research />
        <Projects />
        <Skills />
        <AIAssistant />
      </main>

      <BackToTop />
    </>
  );
}

export default App;