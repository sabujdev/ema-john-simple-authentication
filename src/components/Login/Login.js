import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form_container">
      <div>
        <h1 className="form_title">Login</h1>
        <form>
          <div className="input_group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="input_group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required />
          </div>
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
