import React, { useState } from "react";
import RegisterModalPortal from "./Register";
import SignInModalPortal from "./SignIn";
import confirmCode from "./ConfirmRegister";
import "../styles/Topbar.css";

export default function Topbar() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <div className="Topbar">
      <button
        className="buttons"
        type="button"
        onClick={() => {
          setShowRegisterModal(true);
          console.log(showRegisterModal, "<-- in Topbar.jsx");
        }}
      >
        Register
      </button>
      &nbsp;&nbsp;
      <button
        className="buttons"
        type="button"
        onClick={() => {
          setShowSignInModal(true);
          console.log(showSignInModal, "<-- in Topbar.jsx");
        }}
      >
        Sign In
      </button>
      {showSignInModal ? (
        <SignInModalPortal
          setShowSignInModal={setShowSignInModal}
          showSignInModal={showSignInModal}
        />
      ) : null}
      {showRegisterModal ? (
        <RegisterModalPortal
          setShowRegisterModal={setShowRegisterModal}
          showRegisterModal={showRegisterModal}
        />
      ) : null}
    </div>
  );
}
