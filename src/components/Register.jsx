import { Auth } from "aws-amplify";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import ConfirmRegister from "./ConfirmRegister";
import "../styles/modal.css";

async function signUp(username, password, email, name) {
  try {
    const user = await Auth.signUp({
      username,
      password,
      attributes: {
        name,
        email, // optional
        // phone_number, // optional - E.164 number convention
        // other custom attributes
      },
    });
    console.log({ user }, "<-- this is the user's registration info");

    // do stuff to send user's info to middleware test and routes to database
    // then return a jwt token to see if it has access to their dashboard

    return user;
  } catch (error) {
    console.log("error signing up:", error);
  }
}

function RegisterModal(props) {
  const [signupMail, setSignupMail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="modal">
      <div className="modal-content">
        <h5>Register your Account 🍸</h5>
        {console.log("hello")}
        <div className="signup-field">
          <input
            type="email"
            id="signup-email"
            placeholder="Input your email"
            onChange={(e) => {
              setSignupMail(e.target.value);
            }}
          ></input>
          {/* <label for="signup-email">Email address</label> */}
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
          {/* <label for="signup-password">Choose password</label> */}
        </div>
        <div className="signup-field">
          <input
            type="text"
            id="signup-name"
            placeholder="Input your name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          {/* <label for="signup-password">Name</label> */}
        </div>
        <br></br>
        <button
          type="button"
          className="button"
          onClick={(e) => {
            e.preventDefault();
            signUp(signupMail, password, signupMail, name).then(
              (credentials) => {
                console.log(credentials);
                // do stuff here, if successful, they need to enter their code.
              }
            );
            props.setConfirmCodeModal(true);
            // props.setShowRegisterModal(false);
          }}
        >
          Register
        </button>
        &nbsp;&nbsp;
        <button
          type="button"
          className="button"
          onClick={() => {
            props.setShowRegisterModal(false);
            console.log(props.showRegisterModal, "<-- in Model.jsx");
          }}
        >
          Close
        </button>
        {props.showConfirmCodeModal ? (
          <ConfirmRegister
            setShowRegisterModal={props.setShowRegisterModal}
            showRegisterModal={props.showRegisterModal}
            setConfirmCodeModal={props.setConfirmCodeModal}
            showConfirmCodeModal={props.showConfirmCodeModal}
          />
        ) : null}
      </div>
    </div>
  );
}

function RegisterModalPortal(props) {
  return ReactDOM.createPortal(RegisterModal(props), document.body);
}

export default RegisterModalPortal;
