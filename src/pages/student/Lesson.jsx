function Lesson({ onBack }) {
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

      {/* Lesson Content */}
      <section className="lesson-page">

        <button className="back-button" onClick={onBack}>
          ← Back to Lessons
        </button>

        <h1>Introduction to Java</h1>

        <p className="lesson-number">
          Lesson 1
        </p>

        <div className="lesson-content">

          <h2>What is Java?</h2>

          <p>
            Java is a high-level, object-oriented programming language
            used to develop applications, websites, and software systems.
          </p>

          <h2>Why is Java used?</h2>

          <p>
            Java is widely used because it is platform independent,
            secure, reliable, and supports object-oriented programming.
          </p>

          <h2>Features of Java</h2>

          <ul>
            <li>Object-Oriented</li>
            <li>Platform Independent</li>
            <li>Simple and Secure</li>
            <li>Robust and Reliable</li>
          </ul>

          <h2>Basic Java Program</h2>

          <pre>
{`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`}
          </pre>

        </div>

        <button className="complete-button">
          Mark as Complete
        </button>

      </section>

    </div>
  );
}

export default Lesson;