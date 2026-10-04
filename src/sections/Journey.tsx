import { motion } from "motion/react";
import { journey } from "../data/journey";

function Journey() {
  return (
    <section className="journey-section" id="journey">
      <motion.div
        className="journey-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">MY PATH</p>
        <h2>My Journey</h2>

        <p>
          From learning Java to building full-stack applications.
        </p>
      </motion.div>

      <div className="timeline">
        {journey.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={`${item.title}-${item.period}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
          >
            <div className="timeline-marker" />

            <div className="timeline-content">
              <span className="timeline-period">
                {item.period}
              </span>

              <h3>{item.title}</h3>

              <h4>{item.place}</h4>

              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Journey;