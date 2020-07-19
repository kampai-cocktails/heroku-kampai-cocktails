import React, { useState } from "react";
import RegisterModalPortal from "./Register";
import SignInModalPortal from "./SignIn";
import { Auth } from "aws-amplify";
import "../styles/Topbar.css";

export default function Topbar(props) {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showConfirmCodeModal, setConfirmCodeModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  // note that when users sign in, the buttons should go away add if/else case here for it
  // add confirm code to be entered when user finishes registering

  async function signOut(props) {
    try {
      await Auth.signOut();
      props.setLoginState(false);
      props.setGlobalUser({});
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  return (
    <div className="Topbar">
      {props.loginState ? (
        <>
          <h4>Welcome Back {props.globalUser.name}</h4>
          {console.log(props.globalUser)}
          <br></br>

          <button
            className="buttons"
            type="button"
            onClick={() => {
              signOut(props);
              console.log("<-- SignOut in Topbar.jsx");
            }}
          >
            SignOut
          </button>
        </>
      ) : (
        <>
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
        </>
      )}
      {showSignInModal ? (
        <SignInModalPortal
          setShowSignInModal={setShowSignInModal}
          showSignInModal={showSignInModal}
          loginState={props.loginState}
          setLoginState={props.setLoginState}
          globalUser={props.globalUser}
          setGlobalUser={props.setGlobalUser}
          // setConfirmCodeModal={setConfirmCodeModal}
          // showConfirmCodeModal={showConfirmCodeModal}
        />
      ) : null}
      {showRegisterModal ? (
        <RegisterModalPortal
          setShowRegisterModal={setShowRegisterModal}
          showRegisterModal={showRegisterModal}
          setConfirmCodeModal={setConfirmCodeModal}
          showConfirmCodeModal={showConfirmCodeModal}
        />
      ) : null}
    </div>
  );
}
