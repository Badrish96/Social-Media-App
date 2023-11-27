import React from "react";
import "./auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="LoginLogoImage" />
        <div className="WebName">
          <h1>ZKC Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/* <SignUp /> */}
      <LogIn />
    </div>
  );
};

function LogIn() {
  return (
    <div className="a-right">
      <form action="" className="loginForm authForm logIn">
        <h3>Log In</h3>
        <div>
          <input
            type="text"
            placeholder="Username"
            className="loginInput"
            name="userName"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            className="loginInput"
            name="password"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Don't have an account. Sign up!
          </span>
        </div>
        <button className="button signup-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className="a-right">
      <form action="" className="loginForm authForm">
        <h3>Sign Up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="loginInput"
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="loginInput"
            name="lastName"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Username"
            className="loginInput"
            name="userName"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            className="loginInput"
            name="password"
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="loginInput"
            name="confirmPassword"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account. Login!
          </span>
        </div>
        <button className="button signup-btn" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Auth;
