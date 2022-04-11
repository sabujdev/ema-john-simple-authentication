import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

  //function Email_blur
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  //function for password Blur
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  // function for confirmPassword Blur
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };
  // function for create new user
  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Your password not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be 6 character or longer");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form_container">
      <div>
        <h1 className="form_title">Sign Up</h1>
        <form onSubmit={handleCreateUser}>
          <div className="input_group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              required
            />
          </div>
          <div className="input_group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              required
            />
          </div>
          <div className="input_group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              name="confirm-password"
              required
            />
          </div>
          <input className="form_submit" type="submit" value="Sign Up" />
        </form>
        <p style={{ color: "red", fontSize: "22px" }}>{error}</p>

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
