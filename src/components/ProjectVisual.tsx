
import "./ProjectVisual.css";

type ProjectVisualProps = {
  projectId: number;
};

function ProjectVisual({ projectId }: ProjectVisualProps) {
  if (projectId === 1) {
    return (
      <div className="visual visual-jobs" aria-label="Job tracker illustration">
        <div className="mini-window">
          <div className="mini-window-top">
            <span className="mini-dots">● ● ●</span>
            <span>Application Tracker</span>
          </div>

          <div className="mini-kanban">
            <div className="mini-column">
              <strong>Applied</strong>
              <div className="mini-task">
                <span>Frontend Developer</span>
                <small>Application sent</small>
              </div>
              <div className="mini-task">
                <span>Java Developer</span>
                <small>Application sent</small>
              </div>
            </div>

            <div className="mini-column">
              <strong>Interview</strong>
              <div className="mini-task">
                <span>Full-Stack Developer</span>
                <small>Interview scheduled</small>
              </div>
            </div>

            <div className="mini-column">
              <strong>Offer</strong>
              <div className="mini-task mini-success">
                <span>Software Developer</span>
                <small>Offer received ✓</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 2) {
    return (
      <div className="visual visual-health" aria-label="Healthcare calendar illustration">
        <div className="mini-window">
          <div className="mini-window-top">
            <span className="mini-dots">● ● ●</span>
            <span>Healthcare Appointments</span>
          </div>

          <div className="mini-health-content">
            <div className="mini-health-heading">
              <strong>Appointments</strong>
              <span className="mini-pill">October 2026</span>
            </div>

            <div className="mini-calendar">
              {["M", "T", "W", "T", "F", "S", "S"].map(
                (day, index) => (
                  <span key={index} className="mini-day-label">
                    {day}
                  </span>
                )
              )}

              {Array.from({ length: 28 }, (_, index) => (
                <span
                  key={index}
                  className={
                    [4, 11, 17, 23].includes(index)
                      ? "mini-date mini-booked"
                      : "mini-date"
                  }
                >
                  {index + 1}
                </span>
              ))}
            </div>

            <div className="mini-appointment">
              <span className="mini-appointment-dot" />
              <span>Patient consultation</span>
              <strong>10:30</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 3) {
    return (
      <div className="visual visual-learning" aria-label="Learning platform illustration">
        <div className="mini-window">
          <div className="mini-window-top">
            <span className="mini-dots">● ● ●</span>
            <span>Learning Platform</span>
          </div>

          <div className="mini-learning-content">
            <div className="mini-learning-heading">
              <div>
                <small>CLASSROOM</small>
                <strong>Java Fundamentals</strong>
              </div>
              <span className="mini-pill">Quiz active</span>
            </div>

            <div className="mini-quiz">
              <span>QUESTION 03 / 10</span>
              <strong>Which keyword creates a class in Java?</strong>

              <div className="mini-answer">function</div>
              <div className="mini-answer mini-selected">class ✓</div>
              <div className="mini-answer">object</div>
            </div>

            <div className="mini-progress">
              <span />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default ProjectVisual;
