function MyLearning({ onLearning }) {
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

      {/* My Learning Section */}
      <section className="recommended-section">

        <h1>My Learning</h1>

        <p className="course-page-subtitle">
          Continue learning from where you left off.
        </p>

        <div className="course-cards">

          <div className="course-card">

            <h3>Java Programming</h3>

            <p>
              Learn Java programming from basics to advanced concepts.
            </p>

            <p>
              Progress: 75%
            </p>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <button onClick={onLearning}>Continue Learning</button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default MyLearning;