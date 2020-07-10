import React from "react";
import "../styles/DrinksDisplay.css";

export default function DrinksDisplay(props) {
  console.log(typeof props.drinkResults);

  function getFullCocktailInfo(idNum) {
    return fetch(
      `https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${idNum}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
          "x-rapidapi-key":
            "8618e17941mshc832839b43572f9p1a882bjsn30e7e367eddd",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((drinkDetails) => {
        return drinkDetails;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (typeof props.drinkResults === "object" && (!props.searchError)) {
    return (
      <div className={"imgContainer"}>
        {props.drinkResults.map((obj, index) => (
          <div key={index}>
            <img
              className={"drinkImg"}
              src={obj.strDrinkThumb}
              onClick={async () => {
                // do something here to display the modal
                props.setDrinkId(obj.idDrink);
                let cocktailInfo = await getFullCocktailInfo(obj.idDrink);
                props.setFullDrinkInfo(cocktailInfo.drinks[0]);
                props.setShowModal(true);
              }}
            ></img>
            <p
              className={"drinkNameClickable"}
              onClick={async () => {
                // do something here to display the modal
                props.setDrinkId(obj.idDrink);
                let cocktailInfo = await getFullCocktailInfo(obj.idDrink);
                props.setFullDrinkInfo(cocktailInfo.drinks[0]);
                props.setShowModal(true);
              }}
            >
              {obj.strDrink}
            </p>
          </div>
        ))}
      </div>
    );
  } else if (props.searchError) {
    return (
      <div className="noDrinks">Drinks with that ingredient couldn't be found.</div>
    )
  }
  return (
    <div className="noDrinks">Search by ingredient....or get a random one!</div>
  );
}
