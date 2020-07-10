import React from "react";
import "../styles/Clock.css";
import ReactAnime from "react-animejs";
const { Anime } = ReactAnime;

export default function () {
  return (
    <div className="clock">
      <div className="clock-face">
        <div className="hour-hand"></div>
        <div className="min-hand"></div>
        <Anime
          initial={[
            {
              targets: "#secHand",
              rotate: "1turn",
              duration: 60000,
              easing: "linear",
              loop: true,
            },
          ]}
        >
          <div className="sec-hand" id="secHand"></div>
        </Anime>
      </div>
    </div>
  );
}
