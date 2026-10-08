import { motion } from "motion/react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <div>
          <motion.p
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            FEATURED WORK
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>
        </div>

        <p className="section-description">
          A selection of projects that showcase my experience in
          full-stack development.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          index={index}
        />
        ))}
      </div>
    </section>
  );
}

export default Projects;