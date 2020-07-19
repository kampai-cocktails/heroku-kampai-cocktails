import { Auth } from "aws-amplify";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/modal.css";

async function confirmSignUp(username, code) {

  // console.log(username);
  // console.log(code);
  try {
    await Auth.confirmSignUp(username, code);
    console.log("We're in confirmSignUp");

    // do something after confirmation (maybe return some code)
  } catch (error) {
    console.log("error confirming sign up", error);
  }
}

function ConfirmCodeModal(props) {
  const [confirmCodeUser, setConfirmCodeUser] = useState("");
  const [confirmCode, setConfirmCode] = useState(0);

  return (
    <div className="modal">
      <div className="modal-content">
        <p>Confirm your Account 🍸</p>
        {console.log("hello in Confirm Register")}
        <div className="signup-field">
          <input
            type="email"
            id="confirm-code-email"
            placeholder="Input your Email"
            onChange={(e) => {
              setConfirmCodeUser(e.target.value);
            }}
          ></input>
        </div>
        <div className="signup-field">
          <input
            type="number"
            id="confirm-code"
            placeholder="Input your Confirmation Code"
            onChange={(e) => {
              setConfirmCode(e.target.value);
            }}
          ></input>
        </div>
        <br></br>
        <button
          type="button"
          className="button"
          onClick={(e) => {
            e.preventDefault();
            confirmSignUp(confirmCodeUser, confirmCode).then((credentials) => {
              console.log(credentials);
              // do stuff here if they are successful entering their code.
            });
            props.setConfirmCodeModal(false);
            props.setShowRegisterModal(false);
          }}
        >
          Confirm
        </button>
        &nbsp;&nbsp;
        <button
          type="button"
          className="button"
          onClick={() => {
            props.setConfirmCodeModal(false);
            console.log(props.showRegisterModal, "<-- in Model.jsx");
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

function emailConfirmCodeModal(props) {
  return ReactDOM.createPortal(ConfirmCodeModal(props), document.body);
}

export default emailConfirmCodeModal;
