import { motion } from "motion/react";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  index: number;
};

function ProjectCard({
  title,
  description,
  technologies,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: "easeOut",
      }}
      whileHover={{ y: -6 }}
    >
      <div className="project-image">
        <span>Project screenshot</span>
      </div>

      <div className="project-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="project-technologies">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <a href="#" className="project-link">
          View case study <span>→</span>
        </a>
      </div>
    </motion.article>
  );
}

export default ProjectCard;