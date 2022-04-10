import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {} = useState("");
  return (
    <div className="form_container">
      <div>
        <h1 className="form_title">Sign Up</h1>
        <form>
          <div className="input_group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="input_group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required />
          </div>
          <div className="input_group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="confirm-password" name="password" required />
          </div>
          <input className="form_submit" type="submit" value="Sign Up" />
        </form>
        <div>
          <p>
            Already have an account?
            <Link className="form_link" to="/login">
              Login
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

export default SignUp;
