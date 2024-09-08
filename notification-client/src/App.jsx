import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Signup from "./components/signup";
import Login from "./components/Login";
import Notifications from "./components/Notifications";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Signup onSignup={() => setIsAuthenticated(true)} />}
        />
        <Route
          path="/login"
          element={<Login onLogin={() => setIsAuthenticated(true)} />}
        />
        {isAuthenticated ? (
          <Route path="/notifications" element={<Notifications />} />
        ) : (
          <Navigate to="/login" />
        )}
      </Routes>
    </Router>
  );
};

export default App;
