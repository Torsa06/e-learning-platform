import { useState } from "react";

function Register({ onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Registration button clicked!");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="logo">
          E-Learning
        </div>

        <h1>Create Account</h1>

        <p className="subtitle">
          Start your learning journey
        </p>

        <form onSubmit={handleRegister}>

          <label>Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Confirm Password</label>

          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">
            Create Account
          </button>

        </form>

        <p className="switch-text">
          Already have an account?{" "}
          <button
            className="link-button"
            onClick={onLogin}
          >
            Login
          </button>
        </p>

      </div>
    </div>
  );
}

export default Register;