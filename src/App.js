import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar.jsx";
import MainPage from "./components/MainPage.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar className="navbar" />
      <MainPage className="mainPage" />
      <Footer />
    </div>
  );
}

export default App;
