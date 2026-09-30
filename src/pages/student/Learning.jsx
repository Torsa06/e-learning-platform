function Learning({ onLesson }) {
  return (
    <div className="dashboard">

      {/* Navbar */}
      <nav className="dashboard-navbar">

        <div className="dashboard-logo">
          E-Learning
        </div>

        <div className="dashboard-links">
          <button>Dashboard</button>
          <button>Courses</button>
          <button>My Learning</button>
        </div>

      </nav>

      {/* Learning Section */}
      <section className="learning-page">

        <h1>Java Programming</h1>

        <p className="learning-subtitle">
          Continue your lessons and track your progress.
        </p>

        {/* Progress */}
        <div className="learning-progress">

          <h2>Course Progress</h2>

          <p>75% Completed</p>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

        </div>

        {/* Lessons */}
        <div className="lessons-section">

          <h2>Lessons</h2>

          <div className="lesson-card">
            <span>Lesson 1</span>
            <strong>Introduction to Java</strong>
            <button onClick={onLesson}>Start</button>
          </div>

          <div className="lesson-card">
            <span>Lesson 2</span>
            <strong>Variables and Data Types</strong>
            <button>Start</button>
          </div>

          <div className="lesson-card">
            <span>Lesson 3</span>
            <strong>Conditional Statements</strong>
            <button>Start</button>
          </div>

          <div className="lesson-card">
            <span>Lesson 4</span>
            <strong>Loops in Java</strong>
            <button>Start</button>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Learning;