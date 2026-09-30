function CourseDetails() {
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

      {/* Course Details */}
      <section className="course-details">

        <h1>Java Programming</h1>

        <p className="course-description">
          Learn Java programming from the fundamentals to advanced
          concepts and improve your programming skills.
        </p>

        <div className="course-info">

          <div>
            <h3>Course Level</h3>
            <p>Beginner</p>
          </div>

          <div>
            <h3>Lessons</h3>
            <p>20 Lessons</p>
          </div>

          <div>
            <h3>Duration</h3>
            <p>8 Hours</p>
          </div>

        </div>

        <button className="enroll-button">
          Enroll Now
        </button>

      </section>

    </div>
  );
}

export default CourseDetails;