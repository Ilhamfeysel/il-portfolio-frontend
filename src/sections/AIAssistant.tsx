import { motion } from "motion/react";
import "./AIAssistant.css";

function AIAssistant() {
  return (
    <section className="ai-section">
      <motion.div
        className="ai-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="ai-content">
          <p className="section-label">AI PORTFOLIO ASSISTANT</p>

          <h2>
            Want to know more
            <br />
            about my work?
          </h2>

          <p className="ai-description">
            Ask my AI assistant about my projects, technical skills
            and developer experience.
          </p>

          <button className="ai-button" type="button">
            Try my AI Assistant
            <span>→</span>
          </button>
        </div>

        <div className="ai-visual">
          <motion.div
            className="ai-orb"
            animate={{
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            AI
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default AIAssistant;