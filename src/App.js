import React from "react";
import "./styles/App.css";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar.jsx";
import MainPage from "./components/MainPage.jsx";
import Footer from "./components/Footer.jsx";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

// remove @aws-amplify/ui-react for later

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      {/* <AmplifySignOut /> */}
      <Topbar className="topbar" />
      <Navbar className="navbar" />
      <MainPage className="mainPage" />
      <Footer />
    </div>
  );
}

export default App;
