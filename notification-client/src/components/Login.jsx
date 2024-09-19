import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }), // Sending email in the request
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      navigate("/notifications");
    }
  };

  return (
    <form className="max-w-md mx-auto p-4 space-y-4" onSubmit={handleLogin}>
      <h2 className="text-2xl font-bold">Login</h2>
      <input
        className="w-full p-2 border"
        type="email" // Updated type to "email"
        placeholder="Email" // Placeholder now says "Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Updating state to handle email
      />
      <input
        className="w-full p-2 border"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="w-full bg-green-500 text-white py-2" type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
