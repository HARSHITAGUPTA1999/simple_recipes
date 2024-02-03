import React from "react";

function RecipeIngredients({darkMode}) {
  const ingredients = [
    "Eggs - 2",
    "Salt - as per taste",
    "Pepper- as per taste",
    "Chopped Onions",
    "Butter/Oil",
  ];
  return (
    <div
      className={`card text-start ${darkMode ? 'bg-dark' : 'bg-light'}`}
      style={{ width: "40%", margin: "auto" }}
    >
      <h5 className="card-title">Ingredients</h5>
      <ul className="list">
        {ingredients.map((item) => {
          return <li className="list-item">{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default RecipeIngredients;
