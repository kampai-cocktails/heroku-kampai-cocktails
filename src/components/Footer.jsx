import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      Made with ❤️ by:{" "}
      <a
        href="https://twitter.com/HaleePagel"
        className="nameLinks"
        target="_blank"
      >
        Halee
      </a>
      {", "}
      <a
        href="https://twitter.com/bentley449"
        className="nameLinks"
        target="_blank"
      >
        Jeff
      </a>
      {", "}
      <a
        href="https://twitter.com/softwaredevtam"
        className="nameLinks"
        target="_blank"
      >
        Tam
      </a>
      {", and "}
      <a
        href="https://twitter.com/KapakahiCoder"
        className="nameLinks"
        target="_blank"
      >
        Garrett
      </a>
    </div>
  );
}
