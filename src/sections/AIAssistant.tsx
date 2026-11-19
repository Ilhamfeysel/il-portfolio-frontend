
import { useState, useRef, useEffect } from "react";
import type { FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { sendChatMessage } from "../services/chatApi";
import "./AIAssistant.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const suggestedQuestions = [
  "What are Ilham's technical skills?",
  "Tell me about her projects",
  "What is her Java experience?",
  "How can I contact her?",
];

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function AIAssistant() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isChatOpen) {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [messages, isLoading, isChatOpen]);

  const sendMessage = async (text: string) => {
    const trimmedMessage = text.trim();

    if (!trimmedMessage || isLoading) return;

    if (trimmedMessage.length > 1000) {
      setError("Messages cannot exceed 1000 characters.");
      return;
    }

    setMessages((previous) => [
      ...previous,
      { role: "user", content: trimmedMessage },
    ]);

    setMessage("");
    setError(null);
    setIsLoading(true);

    try {
      const response = await sendChatMessage({
        message: trimmedMessage,
        ...(conversationId ? { conversationId } : {}),
      });

      setConversationId(response.conversationId);

      setMessages((previous) => [
        ...previous,
        { role: "assistant", content: response.reply },
      ]);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void sendMessage(message);
  };

  const handleSuggestedQuestion = (question: string) => {
    void sendMessage(question);
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
                <p>portfolio assistant</p>
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
              {messages.length === 0 && (
                <>
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
                        disabled={isLoading}
                        onClick={() =>
                          handleSuggestedQuestion(question)
                        }
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* Conversation Messages */}
              <div
                className="ai-messages"
                role="log"
                aria-live="polite"
                aria-relevant="additions"
              >
                {messages.map((chatMessage, index) => (
                  <div
                    key={index}
                    className={`ai-message ai-message-${chatMessage.role}`}
                  >
                    <span className="ai-message-label">
                      {chatMessage.role === "user"
                        ? "You"
                        : "Ilham's AI"}
                    </span>
                    <div className="ai-message-content">
  {chatMessage.role === "assistant" ? (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>
      {chatMessage.content}
    </ReactMarkdown>
  ) : (
    chatMessage.content
  )}
</div>

                    
                  </div>
                ))}

                {/* Loading Indicator */}
                {isLoading && (
                  <div
                    className="ai-message ai-message-assistant"
                    role="status"
                  >
                    <span className="ai-message-label">
                      Ilham's AI
                    </span>
                    <p className="ai-message-content">
                      Thinking...
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div className="ai-chat-error" role="alert">
                    {error}
                  </div>
                )}

                <div ref={messagesEndRef} />
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
                maxLength={1000}
                disabled={isLoading}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
              />

              <button
                type="submit"
                disabled={!message.trim() || isLoading}
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

