import { Auth } from "aws-amplify";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/modal.css";

async function Login(username, password) {
  // username = "garrettkchun@yahoo.com";
  // password = "12345678garrett!@#GARRETT";

  try {
    const user = await Auth.signIn(username, password);
    return user;
  } catch (error) {
    console.log("error signing in", error);
  }
}

function SignInModal(props) {
  const [signinMail, setSignInMail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="modal">
      <div className="modal-content">
        <p>hello</p>
        {console.log("hello")}

        <div className="signup-field">
          <input
            type="email"
            id="signup-email"
            placeholder="Input your email"
            onChange={(e) => {
              setSignInMail(e.target.value);
            }}
          ></input>
          <label for="signup-email">Email address</label>
        </div>
        <div className="signup-field">
          <input
            type="password"
            id="signup-password"
            placeholder="Input a password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <label for="signup-password">Choose password</label>
        </div>

        <button
          type="button"
          className="button"
          onClick={(e) => {
            e.preventDefault();
            Login(signinMail, password).then((credentials) => {
              console.log(credentials);
            });
            props.setShowSignInModal(false);
          }}
        >
          Sign In
        </button>

        <button
          type="button"
          className="button"
          onClick={() => {
            props.setShowSignInModal(false);
            console.log(props.showSignInModal, "<-- in Signin.jsx");
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

function SignInModalPortal(props) {
  return ReactDOM.createPortal(SignInModal(props), document.body);
}

export default SignInModalPortal;
