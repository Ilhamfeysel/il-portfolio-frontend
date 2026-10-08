import { motion } from "motion/react";
import "./Skills.css";


import {
  FaJava,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPostman,
} from "react-icons/si";

const skills = [
  { name: "Java", icon: FaJava },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "Docker", icon: FaDocker },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Postman", icon: SiPostman },
];

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
          Technologies and tools I use to build modern full-stack
          applications.
        </p>
      </motion.div>

      <motion.div
        className="skills-orbit"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="orbit-circle orbit-circle-one" />
        <div className="orbit-circle orbit-circle-two" />

        <div className="orbit-center">
          <span>FULL</span>
          <strong>STACK</strong>
        </div>

        <div className="orbit-track">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                className="orbit-position"
                key={skill.name}
                style={{
                  "--index": index,
                  "--total": skills.length,
                } as React.CSSProperties}
              >
                <div className="orbit-skill">
                  <Icon />
                  <span>{skill.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;