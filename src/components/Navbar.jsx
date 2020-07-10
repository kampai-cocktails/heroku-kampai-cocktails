import React from "react";
import Clock from "./Clock.jsx";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <h1 className="appName">Kampai Cocktails</h1>
      <Clock />
      <h2 className="phrase">It's 5 o'clock somewhere...</h2>
    </div>
  );
}
