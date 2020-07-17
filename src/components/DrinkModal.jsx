import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/modal.css";

function checkIngredients(fullDrinkInfo) {
  let measureIngredientPairs = {};

  for (let i = 0; i <= 15; i++) {
    if (fullDrinkInfo[`strIngredient${i}`] !== null) {
      measureIngredientPairs[fullDrinkInfo[`strMeasure${i}`]] =
        fullDrinkInfo[`strIngredient${i}`];
    }
  }

  return (
    <div className="ingredientListContainer">
      Ingredients
      {Object.keys(measureIngredientPairs).map((key) => {
        if (key === "null") {
          return (
            <>
              <p className="individualIngredient" value={key}>
                {"To taste"} -{" "}
                <a
                  href={`https://search.rakuten.co.jp/search/mall/${measureIngredientPairs[key]}`}
                  rel="noopener"
                  target="_blank"
                >
                  {measureIngredientPairs[key]}
                </a>
              </p>
            </>
          );
        } else {
          return (
            <>
              <p className="individualIngredient" value={key}>
                {key} -{" "}
                <a
                  href={`https://search.rakuten.co.jp/search/mall/${measureIngredientPairs[key]}`}
                  rel="noopener"
                  target="_blank"
                >
                  {measureIngredientPairs[key]}
                </a>
              </p>
            </>
          );
        }
      })}
    </div>
  );
}

function fetchYoutubeLink(drink) {
  return fetch(
    `https://youtube-search1.p.rapidapi.com/how%2520to%2520make%2520${drink}%2520drink`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "youtube-search1.p.rapidapi.com",
        "x-rapidapi-key": "8618e17941mshc832839b43572f9p1a882bjsn30e7e367eddd",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((youTubeInfo) => {
      return youTubeInfo;
    })
    .catch((err) => {
      console.log(err);
    });
}

function DrinkModal(props) {
  const [youtubeLink, setYoutubeLink] = useState("");

  return (
    <div className="modal">
      <div
        className="modal-content"
        onMouseEnter={async () => {
          let youtubeObj = await fetchYoutubeLink(props.fullDrinkInfo.strDrink);
          setYoutubeLink(youtubeObj.items[0].url);
        }}
      >
        <img
          className="modalImage"
          src={props.fullDrinkInfo.strDrinkThumb}
        ></img>
        <div className="drinkName">{props.fullDrinkInfo.strDrink}</div>
        <hr></hr>
        <p className="alcoholContent">
          Alcoholic or non-alcoholic? {props.fullDrinkInfo.strAlcoholic}
        </p>
        <p className="glassType">
          Type of glass? {props.fullDrinkInfo.strGlass}
        </p>

        <p className="drinkCategory">
          Category: {props.fullDrinkInfo.strCategory}{" "}
        </p>

        <hr></hr>
        {checkIngredients(props.fullDrinkInfo)}
        <hr></hr>
        <p className="instructions">
          Instructions: {props.fullDrinkInfo.strInstructions}
        </p>
        <p>
          Click{" "}
          <a href={youtubeLink} rel="noopener" target="_blank">
            here
          </a>{" "}
          to watch a tutorial video on making the drink!
        </p>
        <button
          type="button"
          className="button"
          onClick={() => {
            console.log("typeof setshowmodal", typeof setShowModal);
            props.setShowModal(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

function DrinkModalPortal(props) {
  return ReactDOM.createPortal(DrinkModal(props), document.body);
}

export default DrinkModalPortal;
