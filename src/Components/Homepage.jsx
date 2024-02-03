import React from "react";
import RecipeIntro from "./RecipeIntro";
import RecipePrepTime from "./RecipePrepTime";
import RecipeIngredients from "./RecipeIngredients";


function Homepage({darkMode}) {
  return (
    <div className={`mt-5 text-center ${darkMode ? 'text-white' : 'text-dark'}`}>
      <div>
        <h2>Welcome to Simple Recipes</h2>
        <h5>Find simple easy to make delicious recipies in just no time !!</h5>
      </div>
      <RecipeIntro darkMode={darkMode}/>
      <RecipePrepTime darkMode={darkMode}/>
      <RecipeIngredients darkMode={darkMode}/>
    </div>
  );
}

export default Homepage;
