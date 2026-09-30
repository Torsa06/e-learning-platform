import { useState } from "react";

function Login({ onRegister, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
  e.preventDefault();

  onLogin();
};

  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="logo">
          E-Learning
        </div>

        <h1>Welcome Back!</h1>

        <p className="subtitle">
          Login to continue learning
        </p>

        <form onSubmit={handleLogin}>

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
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="switch-text">
          Don't have an account?{" "}
          <button
            className="link-button"
            onClick={onRegister}
          >
            Register
          </button>
        </p>

      </div>
    </div>
  );
}

export default Login;