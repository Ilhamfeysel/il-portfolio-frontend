
import { motion } from "motion/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import heroPhoto from "../assets/hero-photo.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Left side */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Introduction */}
        <motion.p
          className="hero-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="hero-first-name">Ilham</span>
          <span className="hero-last-name">Feysel</span>
        </motion.h1>

        {/* Job title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          Java Full-Stack Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          I build practical web applications that solve real problems,
          with a focus on clean, scalable and user-friendly solutions.
        </motion.p>

        {/* Social media icons */}
        <motion.div
          className="hero-socials"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
        >
          {/* GitHub */}
          <a
            href="https://github.com/Ilhamfeysel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            title="GitHub"
          >
            <FaGithub size={21} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ilhamfeysel/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            title="LinkedIn"
          >
            <FaLinkedinIn size={21} />
          </a>

          {/* Email */}
          <a
            href="mailto:ilhamfeysel@gmail.com"
            aria-label="Send me an email"
            title="Email"
          >
            <HiOutlineMail size={23} />
          </a>
        </motion.div>
      </motion.div>

      {/* Right side - Profile image */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <img
          src={heroPhoto}
          alt="Portrait of Ilham Feysel"
          className="hero-photo"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
