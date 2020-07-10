import React, { useState } from "react";
import RandomButton from "./RandomButton.jsx";
import SearchByIngredient from "./SearchByIngredient.jsx";
import DrinksDisplay from "./DrinksDisplay.jsx";
import DrinkModalPortal from "./DrinkModal.jsx";
import "../styles/MainPage.css";

export default function MainPage() {
  const [ingredient, setIngredient] = useState("");
  const [drinkResults, setDrinkResults] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [drinkId, setDrinkId] = useState("");
  const [fullDrinkInfo, setFullDrinkInfo] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [searchError, setSearchError] = useState(false);

  return (
    <div className="MainPage">
      <div className="allButtons">
        <RandomButton
          className="randomButton"
          drinkResults={drinkResults}
          setDrinkResults={setDrinkResults}
        />
        <SearchByIngredient
          className="searchByIngredient"
          setIngredient={setIngredient}
          ingredient={ingredient}
          drinkResults={drinkResults}
          setDrinkResults={setDrinkResults}
          setSearchError={setSearchError}
        />
      </div>
      <DrinksDisplay
        drinkResults={drinkResults}
        setDrinkResults={setDrinkResults}
        setShowModal={setShowModal}
        drinkId={drinkId}
        setDrinkId={setDrinkId}
        fullDrinkInfo={fullDrinkInfo}
        setFullDrinkInfo={setFullDrinkInfo}
        youtubeLink={youtubeLink}
        setYoutubeLink={setYoutubeLink}
        searchError={searchError}
      />
      <div>
        {showModal ? (
          <DrinkModalPortal
            showModal={showModal}
            setShowModal={setShowModal}
            drinkId={drinkId}
            fullDrinkInfo={fullDrinkInfo}
            setFullDrinkInfo={setFullDrinkInfo}
            youtubeLink={youtubeLink}
            setYoutubeLink={setYoutubeLink}
          />
        ) : null}
      </div>
    </div>
  );
}
