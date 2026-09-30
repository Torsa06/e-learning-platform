function Courses({ onCourseDetails, onMyLearning }) {
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
          <button onClick={onMyLearning}>My Learning</button>
        </div>

      </nav>

      {/* Courses Section */}
      <section className="recommended-section">

        <h1>Browse Courses</h1>

        <p className="course-page-subtitle">
          Explore courses and start learning.
        </p>

        <div className="course-cards">

          <div className="course-card">
            <h3>Java Programming</h3>
            <p>
              Learn Java programming from basics to advanced concepts.
            </p>
          <button onClick={onCourseDetails}>View Course</button>
          </div>

          <div className="course-card">
            <h3>React Development</h3>
            <p>
              Learn React and build modern web applications.
            </p>
            <button>View Course</button>
          </div>

          <div className="course-card">
            <h3>Python Programming</h3>
            <p>
              Learn Python programming and improve your problem-solving skills.
            </p>
            <button>View Course</button>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Courses;