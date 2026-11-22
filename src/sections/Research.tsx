import { useEffect, useState } from "react";
import "./Research.css";

const researchTopics = [
  { id: "beginning", label: "My Beginning" },
  { id: "market", label: "The Job Market" },
  { id: "expectations", label: "Employer Expectations" },
  { id: "experience", label: "My Experience" },
  { id: "reflections", label: "Reflections" },
];

function Research() {
  const [activeTopic, setActiveTopic] = useState("beginning");

  // Track the research topic currently visible on screen
  useEffect(() => {
    const updateActiveTopic = () => {
      const sections = researchTopics
        .map((topic) => document.getElementById(topic.id))
        .filter(
          (section): section is HTMLElement => section !== null
        );

      if (sections.length === 0) return;

      const readingPosition = 100;

      let currentTopic = sections[0].id;

      for (const section of sections) {
        if (
          section.getBoundingClientRect().top <= readingPosition
        ) {
          currentTopic = section.id;
        }
      }

      setActiveTopic((previous) =>
        previous === currentTopic ? previous : currentTopic
      );
    };

    updateActiveTopic();

    window.addEventListener("scroll", updateActiveTopic, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveTopic);

    return () => {
      window.removeEventListener("scroll", updateActiveTopic);
      window.removeEventListener("resize", updateActiveTopic);
    };
  }, []);

  // Navigate to a research topic
  const navigateToTopic = (topicId: string) => {
    const section = document.getElementById(topicId);

    if (!section) return;

    setActiveTopic(topicId);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    section.scrollIntoView({
      behavior: prefersReducedMotion ? "instant" : "smooth",
      block: "start",
    });
  };

  return (
    <section id="research" className="research-section">
      {/* Research heading */}
      <div className="research-heading">
        <p className="section-label">RESEARCH & INSIGHTS</p>

        <h2>
          The Reality of Becoming a Junior Developer in Sweden
        </h2>

        <p className="research-intro">
          Exploring the changing job market for junior software
          developers in Sweden, combining research with my
          personal experience.
        </p>
      </div>

      <div className="research-layout">
        {/* Research navigation */}
        <aside className="research-sidebar">
          <p className="research-sidebar-title">CONTENTS</p>

          {/* Desktop navigation */}
          <nav aria-label="Research contents">
            {researchTopics.map((topic) => (
              <a
                key={topic.id}
                href={`#${topic.id}`}
                className={
                  activeTopic === topic.id
                    ? "research-link-active"
                    : ""
                }
                aria-current={
                  activeTopic === topic.id
                    ? "location"
                    : undefined
                }
              >
                {topic.label}
              </a>
            ))}
          </nav>

          {/* Tablet and mobile dropdown */}
          <div className="research-mobile-navigation">
            <label htmlFor="research-topic-select">
              Jump to a topic
            </label>

            <select
              id="research-topic-select"
              value={activeTopic}
              onChange={(event) => {
                navigateToTopic(event.target.value);
              }}
            >
              {researchTopics.map((topic) => (
                <option key={topic.id} value={topic.id}>
                  {topic.label}
                </option>
              ))}
            </select>
          </div>
        </aside>

        {/* Research article */}
        <article className="research-article">
          <section
            id="beginning"
            className="research-topic"
          >
            <span>01 / MY BEGINNING</span>

            <h3>Why I Chose Software Development</h3>

            <p>
              My story, motivations, and expectations when I
              started studying software development in 2023.
            </p>
          </section>

          <section
            id="market"
            className="research-topic"
          >
            <span>02 / THE JOB MARKET</span>

            <h3>What Changed Between 2023 and 2026?</h3>

            <p>
              Research into the Swedish junior developer job
              market and how opportunities have evolved.
            </p>
          </section>

          <section
            id="expectations"
            className="research-topic"
          >
            <span>03 / EMPLOYER EXPECTATIONS</span>

            <h3>What Do Employers Expect From Juniors?</h3>

            <p>
              Exploring technical skills, experience requirements,
              and the challenges facing new graduates.
            </p>
          </section>

          <section
            id="experience"
            className="research-topic"
          >
            <span>04 / MY EXPERIENCE</span>

            <h3>My Experience After Graduation</h3>

            <p>
              Reflections on job applications, independent
              projects, and continuing to develop my skills.
            </p>
          </section>

          <section
            id="reflections"
            className="research-topic"
          >
            <span>05 / REFLECTIONS</span>

            <h3>What I've Learned Along the Way</h3>

            <p>
              Lessons from navigating the industry and how
              these experiences influence my development.
            </p>
          </section>

          {/* Link to Projects */}
          <a
            href="#projects"
            className="research-projects-link"
          >
            Explore My Projects
            <span aria-hidden="true">→</span>
          </a>
        </article>
      </div>
    </section>
  );
}

export default Research;
