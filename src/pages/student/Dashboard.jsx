function Dashboard({ onCourses, onMyLearning }) {
  return (
    <div className="dashboard">

      {/* Navbar */}
      <nav className="dashboard-navbar">

        <div className="dashboard-logo">
          E-Learning
        </div>

        <div className="dashboard-links">
          <button>Dashboard</button>
          <button onClick={onCourses}>Courses</button>
          <button onClick={onMyLearning}>My Learning</button>
        </div>

      </nav>

      {/* Welcome Section */}
      <section className="welcome-section">

        <h1>Welcome back, Student! 👋</h1>

        <p>
          Continue your learning journey
        </p>

      </section>

      {/* Statistics Section */}
      <section className="stats-section">

        <div className="stat-card">
          <h3>Enrolled Courses</h3>
          <p>4</p>
        </div>

        <div className="stat-card">
          <h3>In Progress</h3>
          <p>2</p>
        </div>

        <div className="stat-card">
          <h3>Completed Courses</h3>
          <p>1</p>
        </div>

      </section>

      {/* Continue Learning */}
      <section className="continue-section">

        <h2>Continue Learning</h2>

        <div className="learning-card">

          <div>
            <h3>Java Programming</h3>

            <p>Progress: 75%</p>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

          </div>

          <button>Continue</button>

        </div>

      </section>

      {/* Recommended Courses */}
      <section className="recommended-section">

        <h2>Recommended Courses</h2>

        <div className="course-cards">

          <div className="course-card">
            <h3>Java Programming</h3>
            <p>Learn Java from basics to advanced concepts.</p>
            <button>View Course</button>
          </div>

          <div className="course-card">
            <h3>React Development</h3>
            <p>Learn how to build modern web applications.</p>
            <button>View Course</button>
          </div>

          <div className="course-card">
            <h3>Python Programming</h3>
            <p>Learn Python programming and problem solving.</p>
            <button>View Course</button>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;