import React from "react";
import Ingredient from "./Ingredient";
import useTheme from "../Contexts/themeContext";

function RecipeIngredients() {


  const ingredients = [
    "Eggs - 2",
    "Salt - as per taste",
    "Pepper- as per taste",
    "Chopped Onions",
    "Butter/Oil",
  ];

  const {user,darkMode} = useTheme();

  return (
    <div
      className={`card text-start ${darkMode ? 'bg-dark' : 'bg-light'}`}
      style={{ width: "40%", margin: "auto" }}
    >
      <h5 className="card-title">Ingredients</h5>
      <ul className="list">
        {ingredients.map((item) => {
          return <Ingredient key={item} ingredient={item}/>
        })}
      </ul>
    </div>
  );
}

export default RecipeIngredients;
