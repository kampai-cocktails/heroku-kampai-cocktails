import { Auth } from "aws-amplify";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/modal.css";

async function Login(username, password) {
  // console.log(username, password, "username and password");
  try {
    const user = await Auth.signIn(username, password);
    return user;
  } catch (error) {
    console.log("error signing in", error);
  }
}

// got to format the sign in modal to make it look better

function SignInModal(props) {
  const [signinMail, setSignInMail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="modal">
      <div className="modal-content">
        <h5>Please Sign-In 🍸</h5>
        {console.log("hello from SignIn")}
        <div className="signin-field">
          <input
            type="email"
            // id="signin-email"
            placeholder="Enter your email"
            onChange={(e) => {
              setSignInMail(e.target.value);
            }}
          ></input>
        </div>
        <br></br>
        <div className="signin-field">
          <input
            type="password"
            // id="signin-password"
            placeholder="Enter a password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <br></br>
        <button
          type="button"
          className="button"
          onClick={(e) => {
            e.preventDefault();
            Login(signinMail, password)
              .then((credentials) => {
                console.log(credentials, "This is the credentials");
                // console.log(credentials.attributes.name, "This is the name");
                props.setLoginState(true);
                props.setGlobalUser({ name: credentials.attributes.name });
              })
              .catch((err) => {
                console.log(err, "Was not able to login");
              });
            props.setShowSignInModal(false);
          }}
        >
          Sign In
        </button>
        &nbsp;&nbsp;
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
