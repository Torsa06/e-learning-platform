import Lesson from "./pages/student/Lesson";
import Learning from "./pages/student/Learning";
import MyLearning from "./pages/student/MyLearning";
import { useState } from "react";
import Login from "./pages/student/Login";
import Register from "./pages/student/Register";
import Dashboard from "./pages/student/Dashboard";
import Courses from "./pages/student/Courses";
import CourseDetails from "./pages/student/CourseDetails";
import "./App.css";

function App() {
  const [page, setPage] = useState("login");

  return (
    <>
      {page === "login" && (
        <Login
          onRegister={() => setPage("register")}
          onLogin={() => setPage("dashboard")}
        />
      )}

      {page === "register" && (
        <Register
          onLogin={() => setPage("login")}
        />
      )}

      {page === "dashboard" && (
       <Dashboard
  onCourses={() => setPage("courses")}
  onMyLearning={() => setPage("my-learning")}
    />
      )}

     {page === "courses" && (
  <Courses
  onCourseDetails={() => setPage("course-details")}
  onMyLearning={() => setPage("my-learning")}
/>
)}
{page === "course-details" && <CourseDetails />}
{page === "my-learning" && (
  <MyLearning
    onLearning={() => setPage("learning")}
  />
)}
{page === "learning" && (
  <Learning
    onLesson={() => setPage("lesson")}
  />
)}
{page === "lesson" && (
  <Lesson
    onBack={() => setPage("learning")}
  />
)}
    </>
  );
}

export default App;