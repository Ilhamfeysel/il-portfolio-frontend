
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./AIAssistant.css";

const suggestedQuestions = [
  "What are Ilham's technical skills?",
  "Tell me about her projects",
  "What is her Java experience?",
  "How can I contact her?",
];

function AIAssistant() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendMessage = (
    e: React.SubmitEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage) return;

    // Temporary: backend connection will be added later
    console.log("Message sent:", trimmedMessage);

    setMessage("");
  };

  return (
    <section className="ai-section">
      {/* AI Assistant Card */}
      <motion.div
        className="ai-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="ai-content">
          <p className="section-label">
            AI PORTFOLIO ASSISTANT
          </p>

          <h2>
            Want to know more
            <br />
            about my work?
          </h2>

          <p className="ai-description">
            Ask my AI assistant about my projects,
            technical skills and developer experience.
          </p>

          <button
            className="ai-button"
            type="button"
            onClick={() => setIsChatOpen(true)}
          >
            Try my AI Assistant
            <span>→</span>
          </button>
        </div>

        <div className="ai-visual">
          <motion.div
            className="ai-orb"
            animate={{ scale: [1, 1.06, 1] }}
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

      {/* Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            className="ai-chat-window"
            role="dialog"
            aria-modal="false"
            aria-label="Ilham's AI Assistant"
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            transition={{ duration: 0.25 }}
          >
            {/* Chat Header */}
            <div className="ai-chat-header">
              <div>
                <h3>Ask Ilham's AI</h3>
                <p>Your portfolio assistant</p>
              </div>

              <button
                type="button"
                className="ai-chat-close"
                onClick={() => setIsChatOpen(false)}
                aria-label="Close chat"
              >
                ×
              </button>
            </div>

            {/* Chat Body */}
            <div className="ai-chat-body">
              <p>
                Hi! 👋 I'm Ilham's AI Assistant.
                Ask me about her skills, projects
                and developer experience.
              </p>

              {/* Suggested Questions */}
              <div className="ai-suggestions">
                {suggestedQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    className="ai-suggestion"
                    onClick={() => setMessage(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <form
              className="ai-chat-input"
              onSubmit={handleSendMessage}
            >
              <input
                type="text"
                placeholder="Ask me anything about Ilham..."
                aria-label="Your message"
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
              />

              <button
                type="submit"
                disabled={!message.trim()}
                aria-label="Send message"
              >
                ➤
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default AIAssistant;
