import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./SignUp.css";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook to navigate after sign up

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("userSignedUp", true); // Store user sign-up status in local storage
      navigate("/quiz"); // Redirect to the quiz page after sign-up
    } else {
      alert("Please fill out both fields!"); // Alert if fields are empty
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
