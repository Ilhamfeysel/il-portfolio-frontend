import { motion } from "motion/react";
import { skills } from "../data/skills";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <motion.div
        className="skills-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">TECH STACK</p>
        <h2>Skills & Technologies</h2>

        <p>
          Technologies I use to build modern full-stack applications.
        </p>
      </motion.div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={skill.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <h3>{skill.category}</h3>

            <div className="skill-list">
              {skill.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;