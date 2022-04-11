import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // handle for E mali Blur
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // handle for Password Blur
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleUserLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate("/inventory");
  }
  return (
    <div className="form_container">
      <div>
        <h1 className="form_title">Login</h1>
        <form onSubmit={handleUserLogin}>
          <div className="input_group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmail} type="email" name="email" required />
          </div>
          <div className="input_group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePassword}
              type="password"
              name="password"
              required
            />
          </div>
          <p style={{ color: "red" }}>{error?.message}</p>
          <input className="form_submit" type="submit" value="Login" />
        </form>
        <div>
          <p>
            New to Ema-John?
            <Link className="form_link" to="/signup">
              Create New Account
            </Link>
          </p>
        </div>

        <div className="border">
          <div className="border_left">------------------ </div>
          or
          <div className="border_left">------------------ </div>
        </div>
        <div className="google_sign_in">
          <input
            className="form_submit"
            type="submit"
            value="Continue Google"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
