import { useState } from "react";
import Button from "../components/Button/Button";
import InputField from "../components/InputField/InputField";
import "./loginPage.css";
import { useDispatch } from "react-redux";

import { loginUser } from "../services/api";
import { setUserDetails } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const dispatch = useDispatch(); // dispatch the data like item dispatched from our end
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    try {
      const response = await loginUser(username, password);
      if (response) {
        const userDetails = {
          id: response.id,
          username: response.username,
          email: response.email,
          firstName: response.firstName,
          lastName: response.lastName,
          image: response.image,
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
        };

        dispatch(setUserDetails(userDetails));
      } else {
        setLoginError(response?.message || "Login failed");
      }
      navigate("/app"); // Redirect to /app route (AppViewPage)
    } catch (error) {
      setLoginError(error.message);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Navigate to the Register page or show register modal
  };
  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Login Page</h2>
        <div className="input-group">
          <InputField
            label="UserName"
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="enter username"
          />
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter password"
          />
        </div>
        {/* Login Button */}
        <Button text="Login" type="submit" className="login-btn" />

        {/* Register Button */}
        <Button
          text="Register"
          onClick={handleRegister}
          className="register-btn"
        />
        {loginError && <p className="error-message">{loginError}</p>}
      </form>
    </div>
  );
}

export default LoginPage;
