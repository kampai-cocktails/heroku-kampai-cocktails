import { Auth } from "aws-amplify";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/modal.css";

async function signUp(username, password, email, name) {
  // let username = "djwannabe33@hotmail.com";
  // let password = "12345678jeff!@#JEFF";
  // let email = "djwannabe33@hotmail.com";
  // let name = "jeff";
  // let phone_number = "+18422394029";

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
        <p>hello</p>
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
        <div className="signup-field">
          <input
            type="text"
            id="signup-name"
            placeholder="Input your name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <label for="signup-password">Name</label>
        </div>

        <button
          type="button"
          className="button"
          onClick={(e) => {
            e.preventDefault();
            signUp(signupMail, password, signupMail, name).then(
              (credentials) => {
                console.log(credentials);
                // do stuff here
              }
            );
            props.setShowRegisterModal(false);
          }}
        >
          Register
        </button>

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
      </div>
    </div>
  );
}

function RegisterModalPortal(props) {
  return ReactDOM.createPortal(RegisterModal(props), document.body);
}

export default RegisterModalPortal;
