
import { useState } from "react";
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import AIAssistant from "./sections/AIAssistant";
import Research from "./sections/Research";
import BackToTop from "./components/BackToTop";
import CVRequestModal from "./components/CVRequestModal";

function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <>
      <AnimatedBackground />

      <Navbar onOpenCVModal={() => setIsCVModalOpen(true)} />

      <main>
        <Hero />
        <Research />
        <Projects />
        <Skills />
        <AIAssistant />
      </main>

      <BackToTop />

      <CVRequestModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </>
  );
}

export default App;
